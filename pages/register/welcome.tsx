import Link from 'next/link';
import AuthLayout from '../../components/AuthLayout';
import { useAuth } from '../../utils/hooks/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';

const RegisterWelcome = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!user) router.replace('/');
  }, [user, loading]);

  if (loading || !user) return <Loading />;

  return (
    <AuthLayout>
      <h3 className='text-center text-3xl font-semibold'>welcome</h3>
      <p className='text-neutral-500 text-sm text-center'>
        Let’s get you started.
      </p>
      <h4 className='font-semibold mt-10'>Register as </h4>
      <p className='text-neutral-500 text-sm'>
        Select an option below to continue
      </p>

      <Link
        href='/create-profile/customer'
        className='border rounded shadow-lg w-full md:w-10/12 flex flex-col gap-2 items-center py-5 my-10 hover:scale-105 transtion-all'>
        <span className='text-lg font-semibold'>BUYER ( USER)</span>
        <span className='text-[#3DA865]'>Click here to continue</span>
      </Link>

      <Link
        href='/create-profile/vendor'
        className='border rounded shadow-lg w-full md:w-10/12 flex flex-col gap-2 items-center py-5 hover:scale-105 transtion-all'>
        <span className='text-lg font-semibold'>VENDOR ( BUSINESS)</span>
        <span className='text-[#3DA865]'>Click here to continue</span>
      </Link>
    </AuthLayout>
  );
};

export default RegisterWelcome;
