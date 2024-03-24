import React, { useState, useEffect } from 'react';
import { FaUser, FaBuilding } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const CustomToast = ({ message }: { message: any }) => (
  <div className='flex items-center bg-white border-l-4 border-green-500 py-2 px-3 shadow-md mb-2'>
    <span className='text-green-500 text-lg font-semibold mr-2'>{message}</span>
    <div className='loader w-6 h-6 border-t-4 border-red-500 border-solid border-2 rounded-full animate-spin'></div>
  </div>
);
const showToast = () => {
  // const toastId = toast[type](<CustomToast message={message} />, {
  //   position: 'top-right',
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   ...options,
  // });

  return 'toastId';
};

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('individual');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // const handleIconClick = (type) => {
  //   setAccountType(type);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push('/'); // Redirect to the home page if the user is already authenticated
  //   }
  // }, [isAuthenticated, router]);

  return (
    <div className=''>
      <h2 className='text-5xl font-bold mb-4 text-center mt-64 max-[560px]:text-3xl'>
        Welcome!
      </h2>
      <div className=' mb-4 text-center mt-4'>
        <p className='text-md text-gray-600 max-[400px]:text-[12px]'>
          Please enter details below to create your account
        </p>
      </div>

      {/* Right Side - Icons and Form */}
      <div className='p-8 flex flex-col justify-center items-center mt-8 '>
        <div className='flex justify-center gap-16 mb-12'>
          <div
            className={`flex flex-col justify-center items-center border p-8 rounded-lg cursor-pointer ${
              accountType === 'individual'
                ? 'border-blue-500'
                : 'border-transparent'
            }`}
            onClick={() => {}}>
            <FaUser
              className={`cursor-pointer mb-4 text-8xl ${
                accountType === 'individual' ? 'text-blue-500' : 'text-gray-500'
              }`}
            />
            <p className='text-[12px] font-semibold text-gray-600'>
              Individual User
            </p>
          </div>

          <div
            className={`flex flex-col justify-center items-center border p-12 rounded-lg space-y-2 cursor-pointer ${
              accountType === 'company'
                ? 'border-blue-500'
                : 'border-transparent'
            }`}
            onClick={() => {}}>
            <FaBuilding
              className={`cursor-pointer text-8xl ${
                accountType === 'company' ? 'text-blue-500' : 'text-gray-500'
              }`}
            />
            <p className='text-[12px] font-semibold text-gray-600'>Company</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-2 form items-center space-y-2 mt-6 mb-16'>
          <div className='flex flex-col mb-8  m w-full'>
            <div className='flex flex-col w-full'>
              <label htmlFor='email' className='text-gray-600 font-medium mb-2'>
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
            <div className='flex flex-col w-full'>
              <label
                htmlFor='password'
                className='text-gray-600 font-medium mb-2'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  placeholder='Password'
                  className='input-field'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className='absolute top-2 mt-2 right-3 cursor-pointer'
                  onMouseEnter={() => setShowPassword(true)}
                  onMouseLeave={() => setShowPassword(false)}>
                  {showPassword ? (
                    <FaEyeSlash style={{ color: 'red' }} />
                  ) : (
                    <FaEye style={{ color: 'black' }} />
                  )}
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <label
                htmlFor='confirmPassword'
                className='text-gray-600 font-medium mb-2'>
                Confirm Password
              </label>

              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  placeholder='Confirm Password'
                  className='input-field'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className='absolute top-2 mt-2 right-3 cursor-pointer'
                  onMouseEnter={() => setShowConfirmPassword(true)}
                  onMouseLeave={() => setShowConfirmPassword(false)}>
                  {showConfirmPassword ? (
                    <FaEyeSlash style={{ color: 'red' }} />
                  ) : (
                    <FaEye style={{ color: 'black' }} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ... Other form fields if needed */}

          <button
            type='submit'
            className='bg-[#D50606] ml-2 cursor-pointer hover:bg-[#b72424] text-white transition duration-300 py-4 px-6 rounded-lg mb-16 text-md font-medium'>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateAccount;
