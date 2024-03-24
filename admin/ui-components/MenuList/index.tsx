import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './Menulist.module.css';
import noData from '/public/no-data.png';
import { motion } from 'framer-motion';

const MenuList = () => {
  const handleEdit = () => {};

  const meals: any = [];

  return (
    <>
      <h2 className={styles['list-h2']}>Menu List</h2>
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={styles['menu-list']}>
        {meals.length === 0 ? (
          <div className='flex flex-col justify-center items-center mt-8 gap-16'>
            <Image
              src={noData}
              alt={'no data image'}
              width={200}
              height={200}
              className={'w-[180px] h-auto'}
            />
            <p className='text-md text-center font-medium mt-16'>
              No created menu to be displayed yet.
            </p>
          </div>
        ) : (
          meals.map((meal: any) => (
            <div key={meal.id} className={styles['meal']}>
              <div className={styles['meal-img']}>
                {meal.image && (
                  <Image src={meal.image} alt='Meal' width={400} height={350} />
                )}
              </div>

              <div className='flex flex-col gap-4'>
                <div className='mt-4'>
                  <p className='text-[12px] font-medium'>Name: {meal.name} </p>
                </div>
                <div className='mt-4'>
                  <p className='text-[12px] font-medium'>
                    Category: {meal.category}{' '}
                  </p>
                </div>
                <div>
                  <p className='text-[12px] font-medium'>Price: {meal.price}</p>
                </div>
                <div className='mb-4'>
                  <p className='text-[12px] font-medium'>
                    Description: {meal.description}
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div>
                  <button
                    onClick={() => {}}
                    className={styles['deletemeal-button']}>
                    Delete Meal
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleEdit()}
                    className={styles['updatemeal-button']}>
                    Update Meal
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </>
  );
};

export default dynamic(() => Promise.resolve(MenuList), { ssr: false });
