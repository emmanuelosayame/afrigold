import { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { api } from '../utils/api';
import { LoadingAbsolute } from '../components/Loading';
import { toast } from 'react-toastify';

const ForgotPaawordPage = () => {
  const [email, setEmail] = useState('');

  const { trigger, isMutating } = useSWRMutation(
    ['/auth/send-reset-password-link'],
    async ([key]) =>
      api.post(key, {
        email,
      }),
    { onSuccess: () => toast.success('Password Reset Link Sent') }
  );

  return (
    <div className='p-8'>
      {isMutating && <LoadingAbsolute />}
      <h2 className='text-5xl font-bold mb-4 text-center mt-64 max-[560px]:text-3xl'>
        Forgot Password?
      </h2>
      <div className=' mb-4 text-center mt-4'>
        <p className='text-md text-gray-600 max-[400px]:text-[12px]'>
          Please enter your email to receive a password reset link.
        </p>
      </div>
      <div className='flex flex-col w-full items-center justify-center'>
        <label htmlFor='email' className='text-transparent font-medium mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          placeholder='Email'
          className='border py-3 px-4 w-full rounded-lg'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='flex flex-col w-full items-center justify-center mt-5'>
        <button
          onClick={() => {
            if (email.length > 0) {
              trigger();
            }
          }}
          type='submit'
          className='bg-[#D50606] ml-2 cursor-pointer hover:bg-[#b72424] text-white transition duration-300 py-4 px-6 rounded-lg mb-16 text-md font-medium'>
          Send Reset Link
        </button>
      </div>
    </div>
  );
};
export default ForgotPaawordPage;
