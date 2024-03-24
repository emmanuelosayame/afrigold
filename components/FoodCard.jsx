// components/FoodCard.js
import Image from 'next/image';

const FoodCard = ({ date, name, imageUrl }) => {
  return (
    <div className="bg-red-500 shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <div className="h-1/2">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <p className="text-gray-500">{date}</p>
         
        </div>
        <div>
           <p className="text-xl font-semibold">{name}</p>

           <button className="flex items-center mt-4 text-blue-500">
          Order More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.293 8l-4-4a1 1 0 10-1.414 1.414L11.586 8H3a1 1 0 000 2h8.586l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
          
        </div>
       
      </div>
    </div>
  );
};

export default FoodCard;
