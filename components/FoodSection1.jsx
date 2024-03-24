// components/FoodSection.js
import React from 'react';
import Image from 'next/image';

const FoodSection = () => {
  const foodItems = [
    { name: 'LEMON-ROSEMARY CHICKEN', price: '2,000', image: potato },
    { name: 'BAKED IRISH POTATO PIZZA', price: '5,000', image: pizza },
    { name: 'GRILLED PORK WITH SPAGHETTI', price: '5,000', image: noodle },
  ];

  return (
    <div className='space-y-4'>
      <h2 className='text-black'>{title}</h2>
      {foods.map((food) => (
        <div key={food.name} className='food-item flex gap-2'>
          <Image
            src={food.image}
            alt={food.name}
            width={100}
            height={100}
            objectFit='cover'
          />
          <div>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            {food.price !== undefined ? (
              <p>Price: ${food.price.toFixed(2)}</p>
            ) : (
              <p>Price: N/A</p>
            )}
            <button className='bg-blue-500 p-2 text-white text-sm font-medium hover:bg-blue-700 duration-300 transition'>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodSection;
