import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function AdminSuccessMessage() {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Initialize containerSize with the initial window size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-64 mb-24 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-emerald-300 text-transparent bg-clip-text animate-pulse">
        Success!
      </h1>

      <p className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-emerald-300 text-transparent bg-clip-text animate-pulse">
        Your message was sent successfully.
      </p>

      <h4 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-emerald-300 text-transparent bg-clip-text animate-pulse">
        We would get back to you as soon as we can..Thanks.
      </h4>

      <div style={{ width: '50%', height: '100%' }}>
        <Confetti width={containerSize.width} height={containerSize.height} />
      </div>
    </div>
  );
}

export default AdminSuccessMessage;


