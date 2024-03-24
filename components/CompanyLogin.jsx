import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"
import SocialAuthButtons from "./SocialAuthButtons"
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const CompanyLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
 const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Implement login logic here
    // If login is successful, navigate to a different page
    // For now, let's simulate a successful login after 2 seconds
    setTimeout(() => {
      router.push('/admin/dashboard'); // Replace with your actual dashboard route
    }, 2000);
  };

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

    const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot Password clicked');
  };

  
  return (
    <div>

         <h2 className="text-3xl font-bold mb-4 text-center mt-64">Hello Again!</h2>
        <div className=" mb-4 text-center mt-4">
          <h4 className="text-xl mb-2 font-semibold">Login</h4>
          <p className="text-md text-gray-600 ">Please enter details below to log into your account</p>
        </div>
     <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-2 form items-center space-y-2 mt-6">
     
     <div className="flex flex-col mb-8 md:flex-row md:space-x-8 w-full">
    <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-gray-600 font-medium mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-gray-600 font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-2 mt-2 right-3 cursor-pointer"
              onMouseEnter={() => setShowPassword(true)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
  </div>

   <div className="flex flex-col mb-8 md:flex-row md:space-x-8 w-full">
   <div className="flex items-center mb-4  w-full ">
      <input
    type="checkbox"
    id="rememberMe"
    className="mr-2"
    checked={rememberMe}
    onChange={() => setRememberMe(!rememberMe)}
  />
    <label htmlFor="rememberMe" className="text-gray-600 font-medium">Remember Me</label>
</div>

     
     <div className="flex flex-col md:w-full ">
      <div className="md:mt-12 ">
         <button className="btn-secondary mb-16 text-[#D50606] hover:underline transition duration-300" type="button" onClick={handleForgotPassword}>
          Forgot Password?
        </button>
      </div>
    </div>
  </div>
        <button className="btn-primary mb-16 mt-16" type="submit">Login</button>
      </form>

    </div>

<div className="flex items-center justify-center mt-12 mb-16">
  <hr className="w-1/3 border-t border-gray-300" />
  <span className="text-gray-600 mx-4 font-medium">OR</span>
  <hr className="w-1/3 border-t border-gray-300" />
</div>

      <SocialAuthButtons
        onGoogleAuth={handleGoogleAuth}
        onFacebookAuth={handleFacebookAuth}
        onLinkedInAuth={handleLinkedInAuth}
      />

          <div className="flex items-center justify-center mb-16">
     <h4>
       Not registered yet?{' '} 
       <Link href="/company-register">
  <div>
    <span className="text-[#D50606] ml-2 cursor-pointer hover:text-[#b72424] transition duration-300 hover:underline">
      Register here
    </span>
  </div>
</Link>

    </h4>
   </div> 

      </div>  
  );
};

export default CompanyLogin;
