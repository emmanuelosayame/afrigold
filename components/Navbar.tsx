import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/hooks/auth';
import { useState } from 'react';
import { BarsSvg } from './Svg';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      <NavSm cart={0} user={user} />
      <NavLg user={!!user} />
    </>
  );
};

const NavSm = ({ user, cart }: { user: any; cart: number }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem('auth.token');
    router.reload();
  };

  const NavLinkSm = ({ name, href }: { name: string; href: string }) => {
    const router = useRouter();
    const active = router.asPath === href;

    return (
      <button
        onClick={() => {
          router.push(href);
          setOpen(false);
        }}
        className={`text-white py-2.5 px-3 text-sm font-semibold flex ${
          active ? 'bg-[#D50606] rounded-lg' : ''
        }`}>
        {name}
      </button>
    );
  };

  return (
    <div className='md:hidden'>
      {!open ? (
        <div className='absolute top-0 inset-x-3 z-40 flex justify-between bg-transparent py-3'>
          <button className='' onClick={() => setOpen(true)}>
            <BarsSvg className='text-white h-8' />
          </button>
        </div>
      ) : (
        <div
          className={`fixed inset-y-0 left-0 w-2/3 bg-black z-30 transform transition-transform py-10`}>
          <button
            className='text-white cursor-pointer flex items-center ml-auto p-4 mr-4'
            onClick={() => setOpen(false)}>
            <span className='mr-1 text-3xl font-bold'>✕</span>
          </button>

          <div className='flex flex-col gap-4 px-10'>
            <NavLinkSm href='/' name='Home' />
            <NavLinkSm href='/menu' name='Menu' />
            <NavLinkSm href='/about' name='About' />
            <NavLinkSm href='/contact' name='Contact' />

            {!user ? (
              <div className='flex gap-2 text-white font-semibold mt-5'>
                <button
                  className='py-2 w-full'
                  onClick={() => {
                    router.push('/login');
                    setOpen(false);
                  }}>
                  Sign In
                </button>
                <button
                  className='py-2 w-full'
                  onClick={() => {
                    router.push('/register');
                    setOpen(false);
                  }}>
                  Sign Up
                </button>
              </div>
            ) : (
              <div className='flex gap-4 justify-between text-white font-semibold mt-5'>
                {/* <Link href='/cart'>
                  <div className='relative cursor-pointer'>
                    <span className='text-white font-medium cursor-pointer hover:translate-y-2 transition duration-300 text-[25px]'>
                      <AiOutlineShoppingCart />
                    </span>
                    {cart > 0 && (
                      <span className='bg-blue-500 rounded-full text-white text-sm absolute -top-1 left-100 px-2'>
                        {cart}
                      </span>
                    )}
                  </div>
                </Link> */}

                <button
                  onClick={logoutUser}
                  className='bg-custom-red py-2 px-6 rounded-2xl text-white text-sm'>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const NavLinkLg = ({ name, href }: { name: string; href: string }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link
      href={href}
      className={`text-white py-2.5 px-5 text-sm font-semibold hover:translate-y-2 transition duration-300 ${
        active ? 'bg-[#D50606] rounded-3xl' : ''
      }`}>
      {name}
    </Link>
  );
};

const NavLg = ({ user }: { user?: boolean }) => {
  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem('_token');
    router.reload();
  };

  return (
    <nav
      className='hidden absolute z-40 inset-x-0 md:flex items-center justify-between py-6
     max-w-screen-xl mx-auto px-10'>
      <div className='flex'>
        <NavLinkLg name='HOME' href={'/'} />
        <NavLinkLg name='MENU' href={'/menu'} />
        <NavLinkLg name='ABOUT' href={'/about'} />
        <NavLinkLg name='CONTACT' href={'/contact'} />
      </div>

      <div className='flex gap-5 items-center'>
        {!user && (
          <>
            <Link
              href='/login'
              className='text-white bg-[#D50606] rounded-3xl py-2.5 px-5 text-sm
            font-bold cursor-pointer hover:translate-y-2 transition duration-300'>
              SIGN IN
            </Link>

            <Link
              href='/register'
              className='text-white rounded-xl py-2.5 px-5
            font-bold cursor-pointer hover:translate-y-2 transition duration-300'>
              SIGN UP
            </Link>
          </>
        )}
        {user && (
          <>
            <button
              onClick={() => router.push('/cart')}
              className='bg-custom-red rounded-full p-3 drop-shadow-md fixed bottom-10 right-10'>
              <svg
                width='28px'
                height='28px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button
              onClick={logoutUser}
              className='text-white bg-[#D50606] rounded-3xl py-2.5 px-5 text-sm
            font-bold cursor-pointer hover:translate-y-2 transition duration-300'>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
