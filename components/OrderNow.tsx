import { useStore } from '../store';

const OrderNow = () => {
  const openModal = useStore((state) => state.openAppsModal);

  return (
    <div className='w-full bg-food-3 text-white px-5 py-10 md:p-14'>
      <div className='w-11/12 md:w-[62%] mx-auto space-y-4 md:space-y-2'>
        <h5 className='text-4xl md:text-[55px] font-bold'>
          Order Food <span className='text-custom-red'>Online</span>{' '}
        </h5>
        <p className='text-xl md:text-[28px]'>Takeaway Food to your Door</p>
        <div className='flex gap-8 items-center'>
          <p className='text-base md:text-[28px]'>Click Here TO Order NOW</p>
          <button
            onClick={() => openModal()}
            className='bg-custom-red px-5 py-2 rounded-3xl text-white 
          font-semibold text-base h-fit whitespace-nowrap'>
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
