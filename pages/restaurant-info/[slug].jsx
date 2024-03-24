// pages/restaurant-info/[slug].js

import { useRouter } from 'next/router';
import RestaurantInfo from '../../components/RestaurantInfo';

const RestaurantInfoPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <RestaurantInfo slug={slug} />
    </div>
  );
};

export default RestaurantInfoPage;
