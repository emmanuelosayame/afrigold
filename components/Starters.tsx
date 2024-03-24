import React, { useState } from 'react';
import Image from 'next/image';
import potato from '../public/potato.jpeg';
import { Food } from '../type/food';
import { formatCurrency } from '../utils/helpers';

const Starters = ({ food }: { food: Food[] }) => {
  const [foodId, setFoodId] = useState(food[0].id);

  const matchedFood = food.find((food) => food.id === foodId)!;

  return (
    <div className='w-10/12 md:w-[65%] flex flex-col md:flex-row py-10 md:py-32'>
      <div className='w-full md:w-1/2'>
        <Image
          src={matchedFood.thumbnail}
          alt={matchedFood.name}
          width={400}
          height={350}
          className='h-[418px] w-auto rounded-md object-cover'
        />
      </div>

      <div className='p-5'>
        <h2 className='font-semibold text-2xl pl-8'>STARTERS</h2>
        {food.map((food) => (
          <div
            key={food.id}
            onClick={() => setFoodId(food.id)}
            className={`flex items-center gap-4  border-b p-7 cursor-pointer hover:bg-black/10`}>
            <div className='w-full'>
              <h2 className='font-semibold text-xl'>{food.name}</h2>
              <p className='text-sm font-medium text-[#928D8DD9]'>
                {food.name}
              </p>
            </div>
            <p className='font-bold text-xl'>
              {formatCurrency(Number(food.price))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starters;
