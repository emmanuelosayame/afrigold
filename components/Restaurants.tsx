import Image from 'next/image';
import image from '../public/amala.png';
import { StarSvg } from './Svg';
import Link from 'next/link';

const Restaurants = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:gap-8 max-w-screen-2xl mx-auto p-3 md:p-10'>
      <RestaurantCard
        name='Ticklers Restaurant'
        rating={{ count: 6, value: 3.8 }}
        locale='Nigerian'
        time='15-35'
        image={image.src}
      />
      <RestaurantCard
        name='Just Delish Restaurant'
        rating={{ count: 6, value: 4.8 }}
        locale='Nigerian'
        time='15-35'
        image={image.src}
      />
      <RestaurantCard
        name='Tribe African Restaurant'
        rating={{ count: 6, value: 3.8 }}
        locale='Nigerian'
        time='15-35'
        image={image.src}
      />
      <RestaurantCard
        name='Food Fantasy'
        rating={{ count: 6, value: 3.8 }}
        locale='Nigerian'
        time='15-35'
        image={image.src}
      />
    </div>
  );
};

type Props = {
  name: string;
  rating: {
    count: number;
    value: number;
  };
  locale: string;
  time: string;
  image: string;
};

const RestaurantCard = ({ locale, name, rating, time, image }: Props) => {
  return (
    <Link
      href={`/restaurant/${name}`}
      className='relative rounded overflow-hidden md:h-[300px] flex items-center drop-shadow-2xl'>
      <Image
        alt={`retauarnt-${name}`}
        src={image}
        width={800}
        height={800}
        className='absolute -z-10 rounded inset-0 object-cover h-[500px] md:h-auto'
      />
      <div className=' text-white w-4/5 mx-auto px-2 py-3'>
        <h2 className='text-xl md:text-4xl font-bold'>{name}</h2>
        <div className='flex font-semibold md:text-lg gap-2 my-3'>
          <StarSvg />

          <span>{rating.value} GOOD</span>

          <span>{rating.count}</span>
        </div>
        <p className='md:text-lg text-[#FFFFFF99] font-semibold my-2'>
          {locale}
        </p>
        <div className='text-sm md:text-base flex justify-end'>
          <div className='bg-[#FFF] rounded-3xl font-bold px-3 py-2 text-black'>
            {time} MIN
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restaurants;
