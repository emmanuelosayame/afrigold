// SocialAuthButtons.jsx
import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsLinkedin } from "react-icons/bs"

const SocialAuthButtons = ({ onGoogleAuth, onFacebookAuth, onLinkedInAuth }) => {
  return (
    <div className="flex items-center justify-center mt-4 mb-8 space-x-4 text-2xl">
      <button className="social-button" onClick={onGoogleAuth}>
        <FcGoogle className="hover:scale-125 transition duration-300" />
      </button>
      <button className="social-button" onClick={onFacebookAuth}>
        <BsFacebook className="text-blue-500 hover:scale-125 transition duration-300" />
      </button>
      <button className="social-button" onClick={onLinkedInAuth}>
        <BsLinkedin className="text-blue-500 hover:scale-125 transition duration-300" />
      </button>
    </div>
  );
};

export default SocialAuthButtons;
