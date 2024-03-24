import CarouselItem from '../components/CarouselItem';
import OrderNow from '../components/OrderNow';
import FoodCarousel from '../components/carousels/FoodCarousel';
import Restaurants from '../components/Restaurants';
import useSWR from 'swr';
import { Food } from '../type/food';
import { api } from '../utils/api';
import { LoadingAbsolute } from '../components/Loading';

const MenuPage = () => {
  const { data, isLoading } = useSWR<{ rows: Food[] }>(
    ['/menu-item/public'],
    async ([url]) => (await api.get(url)).data?.data
  );

  const food = data?.rows || [];

  return (
    <>
      {isLoading && <LoadingAbsolute />}
      <CarouselItem content='downloadLinks' />
      <div className='max-w-screen-lg md:mx-auto space-y-5 py-14 w-full'>
        <h3 className='text-3xl font-bold ml-5'>CATEGORIES</h3>
        <Section header='BREAKFAST & BRUNCH' food={food} />
        <Section header='POPULAR DISHES' food={food} />
        <Section header='SIDES ' food={food} />
      </div>
      <OrderNow />
      <Restaurants />
    </>
  );
};

const Section = ({ header, food }: { header: string; food: Food[] }) => {
  return (
    <div className='w-full flex flex-col py-2 mx-auto px-8'>
      <h1 className='text-xl font-semibold mb-4 ml-5'>{header}</h1>
      <FoodCarousel slides={food} />
    </div>
  );
};

export default MenuPage;
