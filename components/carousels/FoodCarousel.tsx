import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { formatCurrency } from '../../utils/helpers';
import { Food } from '../../type/food';
import useSWRMutation from 'swr/mutation';
import { api } from '../../utils/api';
import { LoadingAbsolute } from '../Loading';
import { useAuth } from '../../utils/hooks/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useStore } from '../../store';

const FoodCarousel = ({ slides }: { slides: Food[] }) => {
  const router = useRouter();
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

  const { user } = useAuth();

  const { trigger, isMutating } = useSWRMutation(
    ['/cart/add'],
    async (
      [url],
      { arg }: { arg: { menu_item: string; quantity: number; user: string } }
    ) => api.post(url, arg),
    { onSuccess: () => toast.success('Added to Cart') }
  );

  const openModal = useStore((state) => state.openAppsModal);

  return (
    <>
      {isMutating && <LoadingAbsolute />}

      <div className='embla-home-menu'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className={`embla__container`}>
            {slides.map((slide, index) => (
              <div className='embla__slide' key={index}>
                <div className='embla__parallax '>
                  <div
                    className='embla__parallax__layer bg-[#D9D9D938] drop-shadow-lg rounded-lg overflow-hidden'
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
                    <div className='py-4 px-20'>
                      <h3 className='font-semibold'>{slide.name}</h3>
                      <h5 className='font-bold text-2xl'>
                        {formatCurrency(Number(slide.price))}
                      </h5>
                      <button
                        onClick={() => openModal()}
                        className='bg-black text-white w-4/5 mx-auto py-2 rounded-xl font-medium mt-4
                   hover:opacity-55 mb-4 transition duration-300'>
                        Place Order
                      </button>
                    </div>
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

        <div className='embla__dots mt-8'>
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
    </>
  );
};

export default FoodCarousel;
