import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSendPasswordReset = async () => {
    try {
    } catch (error) {}
  };

  return (
    <div>
      <h2 className='text-5xl font-bold mb-4 text-center mt-64 max-[560px]:text-3xl'>
        Forgot Password?
      </h2>
      <div className=' mb-4 text-center mt-4'>
        <p className='text-md text-gray-600 max-[400px]:text-[12px]'>
          Please enter your email to receive a password reset link.
        </p>
      </div>
      <div className='flex flex-col mb-8 md:flex-row md:space-x-8 w-full'>
        <div className='flex flex-col w-full items-center justify-center'>
          <label htmlFor='email' className='text-transparent font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            className='input-field'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-col w-full items-center justify-center mb-24'>
        <button
          onClick={handleSendPasswordReset}
          type='submit'
          className='bg-[#D50606] ml-2 cursor-pointer hover:bg-[#b72424] text-white transition duration-300 py-4 px-6 rounded-lg mb-16 text-md font-medium'>
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
