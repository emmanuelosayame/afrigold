import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import {
  BsArrowRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from 'react-icons/bs';
import { Food } from '../../type/food';

const TWEEN_FACTOR = 1.2;

const MenuCarousel = ({ slides }: { slides: Food[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, onInit]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla-home-menu max-w-[1100px] px-10'>
      <h4 className='text-3xl font-medium text-center mb-8'>MENU</h4>
      <div className='embla__viewport' ref={emblaRef}>
        <div className={`embla__container`}>
          {slides.map((slide, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__parallax'>
                <div
                  className='embla__parallax__layer'
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`,
                    }),
                  }}>
                  <Image
                    className='embla__slide__img embla__parallax__img'
                    src={slide.thumbnail}
                    alt='slide'
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className='flex p-1'>
                <div className='border-r border-r-black px-5 py-2'>
                  <p className='text-center'>
                    {new Date(slide.createdAt).toLocaleDateString('en', {
                      month: 'short',
                    })}
                  </p>
                  <p className='text-3xl font-bold'>
                    {new Date(slide.createdAt).toLocaleDateString('en', {
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className='px-5 py-2'>
                  <h5>{slide.name}</h5>
                  <button className='flex gap-2 items-center'>
                    <span>ORDER MORE</span>
                    <BsArrowRight size={30} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!!emblaApi?.canScrollPrev && (
        <button className='embla__prev' onClick={scrollPrev}>
          <BsChevronDoubleLeft size={30} />
        </button>
      )}
      {!!emblaApi?.canScrollNext && (
        <button className='embla__next' onClick={scrollNext}>
          <BsChevronDoubleRight size={30} />
        </button>
      )}

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCarousel;
