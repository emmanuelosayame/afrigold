import React, { useState } from 'react';
import { IoHeartOutline, IoHeart, IoArrowBack, IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLike = (index) => {
    // Handle liking the image
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-between">
        <button onClick={handlePrev}>
          <IoArrowBack size={24} />
        </button>
        <button onClick={handleNext}>
          <IoArrowForward size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-4 overflow-x-scroll">
        <div className="flex space-x-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-64 transform transition-transform duration-300 ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-white">
                <div>
                  <h2 className="text-lg font-semibold">{image.name}</h2>
                  <p className="text-gray-600">${image.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => handleLike(index)}>
                    {image.liked ? <IoHeart /> : <IoHeartOutline />}
                  </button>
                  <button>
                    Order Online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
