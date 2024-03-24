import Image from 'next/image';
import delivery from '../public/delivery.png';
import pickup from '../public/pickup.png';
import edit from '../public/edit-one.png';
import dine from '../public/dine.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface Props {}

const GuideSection = ({}: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when the image enters the viewport
  });

  const [showMore, setShowMore] = useState(false);

  return (
    <div className='w-full bg-[#928D8D21]'>
      <motion.div
        ref={ref} // Attach the ref to the component
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animate only when in view
        transition={{ duration: 0.5 }}
        className='flex flex-col md:flex-row max-w-[1100px] mx-auto items-center p-5'>
        <div className=''>
          <h1 className='text-3xl md:text-4xl font-bold mb-6'>
            What are you looking for?
          </h1>
          <p
            className={`mt-2 min-[600px]:max-w-[75%] min-[960px]:max-w-[45%] text-gray-400`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          {showMore && (
            <div
              className={`mt-2 min-[600px]:max-w-[75%] min-[960px]:max-w-[45%] text-gray-400`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          )}
          <button
            className='bg-[#D50606] font-bold text-white px-4 py-2 rounded-full hover:bg-[#D50606] mb-8 transition duration-300 mt-6'
            onClick={() => setShowMore(true)}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>

        <Services />
      </motion.div>
    </div>
  );
};

const IconCard = ({
  children,
  text,
  subText,
}: {
  children: ReactNode;
  text: string;
  subText: string;
}) => {
  return (
    <div
      className='flex flex-col bg-white shadow-xl rounded-lg justify-center items-center px-4 py-5 md:p-7 h-[250px]
     hover:bg-white/50 transition duration-300 space-y-2'>
      <div>{children}</div>
      <h2 className='text-lg md:text-xl font-semibold'>{text}</h2>
      <p className='text-gray-400'>{subText}</p>
    </div>
  );
};

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when the image enters the viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate only when in view
      transition={{ duration: 0.5 }}
      className='pt-5 md:py-20 grid grid-cols-2 gap-7'>
      <IconCard
        text='Delivery'
        subText=' We deliver to you just in time with less charges'>
        <Image src={delivery} width={80} height={80} alt='Delivery' />
      </IconCard>

      <IconCard
        text='Dine-In'
        subText='Customers can walk in to enjoy their meals'>
        <Image src={dine} width={80} height={80} alt='Dine-In' />
      </IconCard>

      <IconCard
        text='Edit order'
        subText='Customers can edit order(s) within 2-5 mins of order'>
        <Image src={edit} width={80} height={80} alt='Edit order' />
      </IconCard>

      <IconCard
        text='For Pickup'
        subText='Customers can order and pickup when ready'>
        <Image src={pickup} width={80} height={80} alt='For Pickup' />
      </IconCard>
    </motion.div>
  );
};

export default GuideSection;
