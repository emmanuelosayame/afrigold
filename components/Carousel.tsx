import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  UseEmblaCarouselType,
} from 'embla-carousel-react';
import Image from 'next/image';

type Props = {
  slides: string[];
  options?: EmblaOptionsType;
  classNames?: {
    container?: string;
  };
  emblaClassName: string;
  imageWidth: number;
  imageHeight: number;
  plugins?: any;
  emblaCarouselReturn?: UseEmblaCarouselType;
  priorityIndexes?: number[];
  showDots?: boolean;
};

const Carousel = ({
  slides,
  options,
  classNames,
  emblaClassName,
  imageHeight,
  imageWidth,
  plugins,
  emblaCarouselReturn,
  priorityIndexes = [],
  showDots,
}: Props) => {
  const emblaHook = useEmblaCarousel(options, plugins);
  const [emblaRef, emblaApi] = emblaCarouselReturn || emblaHook;
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
  }, [emblaApi, onInit]);

  return (
    <div className={emblaClassName}>
      <div className='embla__viewport' ref={emblaRef}>
        <div className={`embla__container ${classNames?.container || ''}`}>
          {slides.map((image, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <span>{index + 1}</span>
              </div>
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
                    src={image}
                    alt='slide'
                    width={imageWidth}
                    height={imageHeight}
                    priority={priorityIndexes.includes(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDots && (
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
      )}
    </div>
  );
};

export default Carousel;
