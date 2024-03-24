import Image from 'next/image';
import image from '../../../public/pizza.jpeg';
import { MinusSvg, PlusSvg } from '../../../components/Svg';
import FoodCarousel from '../../../components/carousels/FoodCarousel';
import papImage from '../../../public/pap.jpeg';

const DishPage = () => {
  return (
    <div>
      <Image
        width={2000}
        height={1000}
        src={image}
        alt={`Image-dish`}
        className='w-full h-screen'
      />

      <div className='max-w-screen-lg mx-auto py-10 flex justify-between'>
        <div>
          <h4 className='font-semibold text-lg'>Egusi & Semovita</h4>
          <h5>Egusi and a wrap of semo</h5>
          <p>N2,000</p>
        </div>

        <div>
          <h4 className='text-[40px] font-semibold'>
            Tribe African Restaurant
          </h4>
        </div>
      </div>
      <div className='border-b-2' />
      <div className='max-w-screen-lg mx-auto py-10'>
        <p>
          A delicious Egusi soup typically features meat (such as beef, smoked
          poultry, chicken, cow skin, and offal) and seafood (smoked dried fish
          or stockfish).
        </p>

        <div className='flex p-4 mt-10 justify-between items-center'>
          <div className='flex gap-3 items-center border border-[#D50606] p-3'>
            <button>
              <MinusSvg />
            </button>
            <p className='text-2xl font-semibold'>{1}</p>
            <button>
              <PlusSvg />
            </button>
          </div>

          <button
            className='flex gap-10 w-1/2 
          bg-[#D50606] text-2xl items-center justify-center text-white py-6 rounded'>
            <span>ADD TO ORDER LIST</span>
            <span className='text-lg'>N2,000</span>
          </button>
        </div>

        <div className='py-10'>
          <h4 className='text-2xl font-semibold mb-4'>
            Other Deals from Vendor
          </h4>

          <FoodCarousel slides={[]} />
        </div>
      </div>
    </div>
  );
};

export default DishPage;
