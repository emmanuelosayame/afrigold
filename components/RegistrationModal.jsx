import React from 'react';
import { useRouter } from 'next/router';

const RegistrationModal = ({ onClose }) => {
  const router = useRouter();

  const handleIndividualRegistration = () => {
    router.push('/create-account'); // Replace with your actual individual registration route
  };

  const handleCompanyRegistration = () => {
    router.push('/create-account'); // Replace with your actual company registration route
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-75'>
      <div className='bg-white w-[250px] p-6 rounded shadow-md flex flex-col space-y-2'>
        <h2 className='text-xl font-bold text-center'>Welcome</h2>
        <p className='mb-8 text-center '>{"Let's get you started"}</p>
        <div className='flex flex-col mt-8 mb-8 gap-4 '>
          <button
            className='bg-gray-100 rounded shadow-md hover:bg-gray-300 transition duration-300 mb-2 mt-8 py-4'
            onClick={handleIndividualRegistration}>
            Register as an Individual
          </button>
          <button
            className='bg-gray-100 rounded shadow-md hover:bg-gray-300 transition duration-300 mb-8 py-4'
            onClick={handleCompanyRegistration}>
            Register as a Company
          </button>
        </div>
        <button className='mt-12 btn-primary' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RegistrationModal;
