import React from 'react';

const PhoneNumberModal = ({ phoneNumber, onClose, onCall }) => {
  return (
    <div className="modal-overlay">
      <div className="modal bg-white flex flex-col">
        
        <h2 className="text-white text-2xl max-[560px]:text-xl font-semibold mb-6">Do you want to call or copy the phone number?</h2>
        <div className="modal-buttons flex flex-col space-y-4">
          <button 
            onClick={onCall}
            className="bg-[#25D366] py-2 px-8 text-white hover:bg-opacity-75 rounded-lg cursor-pointer"
            >
            Call
          </button>
          <button 
            onClick={() => {navigator.clipboard.writeText(phoneNumber); onClose();}}
             className="bg-blue-600 py-2 px-8 text-white hover:bg-opacity-75 rounded-lg cursor-pointer"
            >
            Copy
          </button>
        </div>
        <button 
          className="modal-close mt-4 bg-red-500 py-2 px-8 text-white hover:bg-opacity-75 rounded-lg cursor-pointer" 
          onClick={onClose}
          >
          Close
        </button>
      </div>
    </div>
  );
};

export default PhoneNumberModal;
