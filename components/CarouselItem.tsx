import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    src: '/assets/81dbdb8015c27f54655241f915a07e8f.png',
  },
  {
    id: 2,
    src: '/assets/4633948609c7597f62e2c15a8603920e.jpg',
  },
];

const CarouselItem = ({ content }: { content: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSlideChange = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <Carousel
      className='w-full'
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      selectedItem={activeIndex}
      onChange={handleSlideChange}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className='relative h-[500px] md:h-screen bg-black flex justify-end'>
          {slide.id === 1 ? (
            <div className='self-end'>
              <Image
                width={740}
                height={670}
                src={slide.src}
                alt={`Image ${index + 1}`}
                className='w-[700px] h-[600px] object-contain m-0 xl:mr-40'
              />
            </div>
          ) : (
            <Image
              layout='fill'
              src={slide.src}
              alt={`Image ${index + 1}`}
              className='object-cover'
            />
          )}
          <div className='absolute inset-0 pt-20 md:pt-40 xl:pt-48 z-40  bg-black/50 pb-3'>
            <div
              className='max-w-screen-xl w-full mx-auto flex flex-col gap-4 items-start
           text-white'>
              <h4 className='text-4xl md:text-[50px] font-medium pl-10 md:pl-5'>
                Order the Finest
              </h4>
              <p className='text-xl md:text-[25px] font-medium pl-10'>
                A restaurant in your hands/phone
              </p>
              <p className='text-lg md:text-[20px] pl-14 max-w-[500px] text-start'>
                Giving you the ability to order food anywhere you are for
                personal or even large gatherings
              </p>
              <DownloadLinksAndText />
              {content === 'orderButton' && (
                <>
                  <button className='order-button left-align'>ORDER NOW</button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const DownloadLinksAndText = () => {
  return (
    <div className='flex flex-col gap-5 xl:gap-8 sm:mt-10 xl:mt-16 ml-10'>
      <button className='flex gap-3 items-center bg-[#d50606b7] rounded-[20px] px-4 py-2'>
        <div className='w-[70px]'>
          <Image
            src='/google-play-icon.png'
            alt='Google Play'
            width={100}
            height={100}
            className=''
          />
        </div>
        <p className=' text-white'>Download on Google Play</p>
      </button>
      <button className='flex gap-3 items-center bg-[#d50606b7] rounded-[20px] px-4 py-2'>
        <div className='w-[70px]'>
          <Image
            src='/app-store--icon.png'
            alt='App Store'
            width={100}
            height={100}
          />
        </div>
        <p className='download-text'>Download on App Store</p>
      </button>
    </div>
  );
};

export default CarouselItem;
