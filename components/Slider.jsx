import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoHeartCircleOutline } from 'react-icons/io5';

const data = [
  {
    id: 1,
    image: '/afang.jpg',
    name: 'Afang Soup',
    price: 'N 2,000',
    favorite: false,
  },
  {
    id: 2,
    image: '/agidi.jpg',
    name: 'Moi-Moi',
    price: 'N 3,000',
    favorite: false,
  },
  {
    id: 3,
    image: '/ewa.jpeg',
    name: 'Beans and Bread',
    price: 'N 4,000',
    favorite: false,
  },
  {
    id: 4,
    image: '/pap.jpeg',
    name: 'Akara and Pap',
    price: 'N 5,000',
    favorite: false,
  },
  {
    id: 5,
    image: '/plantain-egg.jpeg',
    name: 'Plantain and Egg',
    price: 'N 6,000',
    favorite: false,
  },
  {
    id: 6,
    image: '/yam.jpeg',
    name: 'Porridge Yam',
    price: 'N 7,000',
    favorite: false,
  },
  // Add more food items...
];

const Slider = ({ isAuthenticated }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      <h2 className='special-offer-text'>Special Offer</h2>

      <div className='w-full flex-1 relative'>
        <Image
          src={data[currentSlide].image}
          alt=''
          fill
          className='object-cover'
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h3 className='text-xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].name}
        </h3>

        <p className='text-lg text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].price}
        </p>
      </div>
      <div className='food-actions'>
        {isAuthenticated ? (
          <button className='place-order-button'>Place Order</button>
        ) : (
          <p className='place-order-login-message'>Login to place an order</p>
        )}
        <IoHeartCircleOutline
          filled={food.favorite}
          onClick={() => handleFavoriteClick(index)}
        />
      </div>
    </div>
  );
};

export default Slider;
