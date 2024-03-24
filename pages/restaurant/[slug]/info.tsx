import Image from 'next/image';
import image from '../../../public/pizza.jpeg';
import { ChatSvg, PhoneSvg, StarSvg } from '../../../components/Svg';

const reviews = Array.from(Array(10).keys()).map((key) => ({
  id: key.toString(),
  name: 'James',
  body: 'I loved my food. It was so yummy and tasty.',
  date: 'August 25, 2023',
}));

const RestaurantInfo = () => {
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

        <div className='bg-white rounded-tr-2xl px-5 py-5 absolute bottom-0 left-0 text-2xl'>
          <h3 className='font-bold'>
            15-35 <span className='font-thin'>MIN</span>
          </h3>
        </div>
      </div>

      <div className=' text-black w-4/5 mx-auto text-lg p-10'>
        <h2 className='text-3xl font-bold'>Tribe African Restaurant</h2>
        <div className='flex gap-2 my-3'>
          <StarSvg />

          <span>3.6 GOOD (6)</span>

          <p className='text-lg ml-5'>Opens until 10:00 pm</p>
        </div>

        <p className='text-sm'>Instant delivery</p>

        <h6 className='mt-10 mb-5 font-semibold'>Opening hours</h6>
        <p className='text-sm'>Monday - Saturday</p>
        <p className='text-sm my-1'>09:00 am - 10:00 pm</p>
        <p className='text-sm mt-3'>Sunday</p>
        <p className='text-xs mt-1 text-red-600'>Closed</p>
      </div>

      <div className='my-4 border-t border-b flex'>
        <div className='max-w-screen-lg mx-auto p-10 w-full'>
          <h3 className='text-xl font-semibold'>Contact Us</h3>
          <p className='my-4'>
            Do you have issues placing order ? Speak to our customer service
            representative.
          </p>

          <div className='flex gap-20'>
            <a href='#' className='flex gap-3'>
              <PhoneSvg />
              <p>Speak to our customer representative</p>
            </a>
            <a href='#' className='flex gap-3'>
              <ChatSvg />
              <p>Chat</p>
            </a>
          </div>
        </div>
      </div>

      <div className='max-w-screen-lg mx-auto p-5'>
        <h4 className='font-bold'>Our reviews</h4>

        <div className='flex gap-2 border-b py-2'>
          <StarSvg />
          <p>3.8 Good</p>
        </div>

        <div className='flex flex-col gap-3'>
          {reviews.map((review) => (
            <div key={review.id} className='p-3'>
              <h4 className='text-xl font-bold'>{review.name}</h4>
              <p className='text-lg'>{review.body}</p>
              <p className='text-[#00000080] text-sm'>{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
