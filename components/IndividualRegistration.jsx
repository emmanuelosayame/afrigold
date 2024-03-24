import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialAuthButtons from './SocialAuthButtons';

const IndividualRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle registration logic here

    // After successful registration, navigate to the login page
    router.push('/individual-login');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError('Password must contain at least one special symbol.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError(''); // Clear any previous errors
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  const handleGoogleAuth = () => {
    // Simulate Google authentication logic
    console.log('Google authentication clicked');
  };

  const handleFacebookAuth = () => {
    // Simulate Facebook authentication logic
    console.log('Facebook authentication clicked');
  };

  const handleLinkedInAuth = () => {
    // Simulate LinkedIn authentication logic
    console.log('LinkedIn authentication clicked');
  };

  return (
    <div className='mb-6 relative'>
      {error && (
        <p
          className={`text-red-500 absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-6 transition-transform ease-in duration-300 ${
            error ? 'opacity-100' : 'opacity-0'
          }`}>
          {error}
        </p>
      )}

      <h2 className='text-4xl font-bold mb-4 mt-64 text-center'>
        Create an account
      </h2>
      <h4 className='text-xl font-semibold mb-2 mt-8 text-center'>
        Register as a Buyer
      </h4>
      <p className='text-md text-gray-600 font-semibold mb-16 mt-2 text-center'>
        Please enter your information below
      </p>

      <div className='flex justify-center items-center '>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-2 form items-center space-y-4 mt-6 '>
          <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
            <h4 className='text-left text-[#D50606] font-semibold mb-4 text-2xl'>
              GENERAL INFORMATION
            </h4>
          </div>

          <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
            <div className='flex flex-col w-full'>
              <label
                htmlFor='firstName'
                className='text-gray-600 font-medium mb-2'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                placeholder='First Name'
                className='input-field'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label
                htmlFor='lastName'
                className='text-gray-600 font-medium mb-2'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                placeholder='Last Name'
                className='input-field'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
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
                htmlFor='phoneNumber'
                className='text-gray-600 font-medium mb-2'>
                Phone Number
              </label>
              <input
                type='tel'
                id='phoneNumber'
                placeholder='Phone Number'
                className='input-field'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
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
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
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
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </div>

          <button className='btn-primary mb-32' type='submit'>
            Continue
          </button>
        </form>
      </div>

      <div className='flex items-center justify-center mt-8 mb-16 flex-col'>
        <h4>
          {'By clicking "Continue" You agree to Nigold'}
          <Link href='/term-of-service'>
            <span className='text-[#D50606] ml-2 cursor-pointer hover:text-[#b72424] transition duration-300 hover:underline'>
              Terms of Service
            </span>
          </Link>
        </h4>
      </div>
      <div className='flex items-center justify-center mt-4 mb-16'>
        <hr className='w-1/3 border-t border-gray-300' />
        <span className='text-gray-600 mx-4 font-medium'>OR</span>
        <hr className='w-1/3 border-t border-gray-300' />
      </div>

      <SocialAuthButtons
        onGoogleAuth={handleGoogleAuth}
        onFacebookAuth={handleFacebookAuth}
        onLinkedInAuth={handleLinkedInAuth}
      />

      <div className='flex items-center justify-center mb-16'>
        <h4>
          Existing User? Click here to
          <Link href='/individual-login'>
            <span className='text-[#D50606] ml-2 cursor-pointer hover:text-[#b72424] transition duration-300 hover:underline'>
              Signin
            </span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default IndividualRegistration;
