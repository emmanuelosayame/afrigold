import { FaArrowLeft, FaArrowRight, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../slices/cartSlice';
import { selectIsAuthenticated } from '../slices/authSlice';
import { useRouter } from 'next/router';
import { useWishlistStore } from '../store/store';
import { toast } from 'react-toastify';

const MenuMenu = ({ items, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(1);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();

  useEffect(() => {
    const calculateNumVisible = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setNumVisible(3);
      } else if (screenWidth >= 640) {
        setNumVisible(2);
      } else {
        setNumVisible(1);
      }
    };

    calculateNumVisible();
    window.addEventListener('resize', calculateNumVisible);

    return () => {
      window.removeEventListener('resize', calculateNumVisible);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleFavoriteClick = (id, name, imageUrl, price) => {
    const isMealInWishlist = wishlist.some((item) => item.id === id);

    if (!isAuthenticated) {
      toast.warning('Please log in to add the meal to your wishlist.');
      router.push('/login');
    } else {
      if (isMealInWishlist) {
        // Meal is already in the wishlist, remove it
        removeFromWishlist(id);
        toast.info('Meal removed from the wishlist!');
      } else {
        // Meal is not in the wishlist, add it
        addToWishlist({ id, name, image: imageUrl, price });
        toast.success('Meal added to the wishlist!');
      }
    }
  };

  const handlePlaceOrder = (id, name, imageUrl, price) => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      dispatch(addItemToCart({ id, name, image: imageUrl, price }));
      toast.success('Meal added to the cart!');
    }
  };

  const visibleIndices = [];
  for (let i = 0; i < numVisible; i++) {
    const index = (currentIndex + i) % items.length;
    visibleIndices.push(index);
  }

  return (
    <div className='relative w-full '>
      <div className='flex items-center justify-center space-x-6 card mb-24'>
        <button
          onClick={goToPrevious}
          className='text-white hover:text-white/75 transition duration-300  bg-blue-500 rounded-full p-2 mr-2'>
          <FaArrowLeft size={8} />
        </button>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 slider space-x-2'>
          {visibleIndices.map((index) => (
            <div
              key={index}
              className='relative bg-white shadow-lg rounded-lg overflow-hidden card-large'>
              <div className='h-36 relative'>
                <Image
                  src={items[index].imageUrl}
                  alt={items[index].name}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='p-4 flex justify-between items-center gap-2'>
                <div className='flex flex-col items-center '>
                  <div className='flex items-center'>
                    <p className='text-lg font-semibold text-center'>
                      {items[index].name}
                    </p>
                  </div>
                  <div>
                    <p className='text-md font-semibold'>{`N ${items[index].price}`}</p>
                  </div>
                  <div className='flex items-center justify-between order-flex space-x-10 max-[1020px]:space-x-24 '>
                    <button
                      className='flex items-center mt-4 text-white p-3 text-[12px] rounded-lg bg-blue-500 text-sm'
                      onClick={() =>
                        handlePlaceOrder(
                          items[index].id,
                          items[index].name,
                          items[index].imageUrl,
                          items[index].price
                        )
                      }>
                      Order
                    </button>
                    <FaHeart
                      className={
                        wishlist.some((item) => item.id === items[index].id)
                          ? 'text-red-500 cursor-pointer text-lg mr-4'
                          : 'text-gray-400 cursor-pointer text-lg mr-4'
                      }
                      onClick={() =>
                        handleFavoriteClick(
                          items[index].id,
                          items[index].name,
                          items[index].imageUrl,
                          items[index].price
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className='text-white hover:text-white/75 transition duration-300  bg-blue-500 rounded-full p-2 ml-12'>
          <FaArrowRight size={8} />
        </button>
      </div>
    </div>
  );
};

export default MenuMenu;
