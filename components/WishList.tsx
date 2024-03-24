// Wishlist.js
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { toast } from 'react-toastify';

const Wishlist = () => {
  const handleAddToCart = (food: any) => {
    // toast.success('Meal added to the cart!');
  };

  const handleRemoveFromWishlist = (food: any) => {
    toast.warning('Meal removed from the wishlist!');
  };

  return (
    <div className='items-center mt-[16px] mb-[50px] px-8'>
      <h2 className='text-5xl mt-32 mb-16 font-bold'>Your Wishlist</h2>

      {[].length === 0 ? (
        <p className='text-2xl text-gray-500 text-center font-medium'>
          Your wishlist is empty.
        </p>
      ) : (
        <ul className='mt-4 gap-6 my-8 grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
          {[].map((food: any) => (
            <li key={food.id} className='mb-4 '>
              <div className='flex-col  items-center'>
                <div className=' mr-4'>
                  <Image
                    src={food.image}
                    alt={food.name}
                    width={200}
                    height={200}
                    objectFit='cover'
                  />
                </div>
                <div className=''>
                  <h3 className='text-2xl font-semibold'>{food.name}</h3>
                  <p className='text-gray-600 font-semibold'>{` N ${food.price}`}</p>
                  <div className='flex-col max-[360px]:flex space-x-4 mt-2 max-[360px]:space-y-4 max-[360px]:space-x-0 max-[360px]:mt-4'>
                    <button
                      className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 max-[360px]:text-xl'
                      onClick={() => handleAddToCart(food)}>
                      Add to Cart
                    </button>
                    <button
                      className='bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 max-[360px]:text-xl'
                      onClick={() => handleRemoveFromWishlist(food)}>
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Wishlist), { ssr: false });
