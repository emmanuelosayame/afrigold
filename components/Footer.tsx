import { TiLocation } from 'react-icons/ti';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='max-w-[1100px] mx-auto flex gap-4 p-5 md:p-10'>
        <div className='w-2/3 md:w-full space-y-4'>
          <h2 className='text-white text-xl font-medium'>Contact Info</h2>
          <div className='flex gap-4 items-center text-base'>
            <div className='bg-[#D50606] p-2 rounded-full '>
              <TiLocation className='text-white h-5 md:h-8 w-5 md:w-8 text-center' />
            </div>

            <p className='text-white font-medium text-[15px] md:text-base'>
              No. 4b, new JERUSALEM duste Alhaji Abuja
            </p>
          </div>
          <div className='flex gap-4 items-center '>
            <div className='bg-[#D50606] p-2 rounded-full '>
              <BsFillTelephoneInboundFill className='text-white h-5 md:h-8 w-5 md:w-8 text-center' />
            </div>
            <p className='text-white font-medium text-center text-[15px] md:text-base'>
              +234 906 139 3012 | +234 816 991 9062
            </p>
          </div>
          <div className='flex gap-4 items-center '>
            <div className='bg-[#D50606] p-2 rounded-full '>
              <AiOutlineMail className='text-white h-5 md:h-8 w-5 md:w-8 text-center' />
            </div>
            <p className='text-white font-medium'>
              nikeobitech.startup@gmail.com
            </p>
          </div>
        </div>

        <div className='w-1/3 md:w-full'>
          <h2 className='text-white text-xl font-medium whitespace-nowrap'>
            Quick Links
          </h2>
          <div className='flex flex-col text-white gap-3 pl-7 pt-5'>
            <Link
              href='/'
              className='text-white transition duration-300 hover:underline'>
              Home
            </Link>

            <Link
              href='/menu'
              className='text-white transition duration-300 hover:underline'>
              Menu
            </Link>

            <Link
              href='/about'
              className='text-white transition duration-300 hover:underline'>
              About
            </Link>

            <Link
              href='/contact'
              className='text-white transition duration-300 hover:underline'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
