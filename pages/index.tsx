import React, { useRef, useState } from 'react';
import Head from 'next/head';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselItem from '../components/CarouselItem';
import { useRouter } from 'next/router'; // Import the useRouter hook
import GuideSection from '../components/GuideSection';
import Starters from '../components/Starters';
import OrderNow from '../components/OrderNow';
import FoodCarousel from '../components/carousels/FoodCarousel';
import MenuCarousel from '../components/carousels/MenuCarousel';
import { useAuth } from '../utils/hooks/auth';
import useSWR from 'swr';
import { api } from '../utils/api';
import { LoadingAbsolute } from '../components/Loading';
import { Food } from '../type/food';

export default function Home() {
  const { data, isLoading } = useSWR<{ rows: Food[] }>(
    ['/menu-item/public'],
    async ([url]) => (await api.get(url)).data?.data
  );

  const food = data?.rows || [];

  return (
    <>
      {isLoading && <LoadingAbsolute />}
      <Head>
        <title>Nigold</title>
        <meta
          name='description'
          content='A cutting-edge decentralized food delivery platform'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CarouselItem content='downloadLinks' />

      <div className='flex flex-col items-center justify-center my-8 space-y-2 overflow-hidden'>
        <div className='mt-4 gap-4 my-8 flex flex-col max-w-[1100px] w-full md:mx-auto px-7'>
          <h1 className='text-2xl font-medium '>SPECIAL OFFER</h1>
          <FoodCarousel slides={food} />
        </div>

        <GuideSection />

        <OrderNow />

        {food.length > 0 && <Starters food={food.slice(0, 3)} />}

        <MenuCarousel slides={food} />
      </div>
    </>
  );
}
