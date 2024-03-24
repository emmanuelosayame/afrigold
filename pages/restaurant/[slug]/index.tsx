import { useRouter } from 'next/router';
import image from '../../../public/pizza.jpeg';
import Image from 'next/image';
import { StarSvg } from '../../../components/Svg';
import Link from 'next/link';
import { useState } from 'react';
import { formatCurrency } from '../../../utils/helpers';
import dishImage from '../../../public/gbegiri.jpg';

const Restaurant = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const [selected, setSelected] = useState('MAIN DISHES');

  return (
    <div>
      <div className='relative flex justify-center items-center h-screen'>
        <h4 className='text-white text-5xl font-bold z-20'>
          Tribe African Restaurant
        </h4>

        <Image
          // width={2000}
          // height={1000}
          layout='fill'
          src={image}
          alt={`Image-restaurant`}
          className='absolute -z-10 inset-0'
        />

        <div className='bg-white rounded-tr-2xl px-5 py-5 absolute bottom-0 left-0 text-3xl'>
          <h3 className='text-2xl font-bold'>
            15-35 <span className='font-thin'>MIN</span>
          </h3>
        </div>
      </div>

      <section>
        <div className=' text-black w-4/5 mx-auto text-lg p-10'>
          <h2 className='text-[32px] font-bold'>Tribe African Restaurant</h2>
          <div className='flex font-semibold text-lg gap-2 my-3'>
            <StarSvg />

            <span>3.6 GOOD</span>

            <span>6</span>

            <p className='text-lg ml-5'>Opens until 10:00 pm</p>
          </div>

          <p className='text-lg'>Instant delivery</p>
          <div className='flex gap-4'>
            <p className=''>Nigerian</p>

            <Link href={`/restaurant/1/info`} className='text-[#4D4DFF]'>
              More info
            </Link>
          </div>
        </div>

        <div className='border-b-2' />
        <div className='flex justify-between py-3 px-48'>
          <SelectButton
            selected={selected}
            setSelected={setSelected}
            name='MAIN DISHES'
          />
          <SelectButton
            selected={selected}
            setSelected={setSelected}
            name='SIDE'
          />
          <SelectButton
            selected={selected}
            setSelected={setSelected}
            name='PROTEINS'
          />
          <SelectButton
            selected={selected}
            setSelected={setSelected}
            name='SWALLOW'
          />
          <SelectButton
            selected={selected}
            setSelected={setSelected}
            name='SOUP / SAUCE'
          />
        </div>
        <div className='border-b-2' />
        <div className='px-44 p-4'>
          <h3 className='font-bold text-lg'>{selected}</h3>

          <div className='flex flex-col gap-10 mt-10'>
            {[1, 2, 3, 4, 5].map((dish) => (
              <DishCard
                key={dish}
                id={dish.toString()}
                description='Well cooked yam porridge with fish '
                name='YAM PORRIDGE'
                imageSrc={dishImage.src}
                price={3000}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SelectButton = ({
  selected,
  setSelected,
  name,
}: {
  selected: string;
  setSelected: (name: string) => void;
  name: string;
}) => {
  return (
    <button
      className={`text-lg font-medium pb-2 border-b-[3px] ${
        selected === name ? 'border-red-600' : 'border-transparent'
      }`}
      onClick={() => selected !== name && setSelected(name)}>
      {name}
    </button>
  );
};

const DishCard = ({
  imageSrc,
  name,
  description,
  price,
  id,
}: {
  imageSrc: string;
  name: string;
  description: string;
  price: number;
  id: string;
}) => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Link href={`/restaurant/${slug}/${id}`} className='flex gap-4'>
      <Image
        alt='dish'
        src={imageSrc}
        width={500}
        height={500}
        className='w-44 rounded object-contain'
      />

      <div className='p-2'>
        <h3 className='text-[20px] font-semibold'>{name}</h3>
        <h4 className='text-[20px] my-3'>{description}</h4>
        <h5 className='text-2xl font-bold'>{formatCurrency(price)}</h5>
      </div>
    </Link>
  );
};

export default Restaurant;
