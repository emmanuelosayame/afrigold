import Link from 'next/link';
import { ReactNode } from 'react';

const AuthLayout = ({
  children,
  signIn = true,
}: {
  children: ReactNode;
  signIn?: boolean;
  user?: boolean;
}) => {
  return (
    <>
      <div className='bg-custom-red min-h-screen h-full flex justify-end'>
        <div className='w-full md:w-4/5 flex flex-col bg-white p-10 items-center'>
          <div className='max-w-screen-sm w-full mx-auto flex flex-col'>
            {signIn && (
              <div className='flex gap-1 self-end mb-10'>
                <p>Existing User? Click here to</p>
                <Link href={'/login'} className='text-custom-red'>
                  Sign In
                </Link>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
