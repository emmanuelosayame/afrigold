import { BellIcon } from 'lucide-react';

function HeaderAdmin() {
  return (
    <header className='flex justify-end py-2 px-4 border-b'>
      <div className='flex gap-2'>
        <div className='bg-neutral-500 w-10 h-10 rounded-full' />
        <div>
          <h3 className='font-semibold'>Travon Johnston</h3>
          <p className='text-sm text-neutral-500'>Admin</p>
        </div>
        <BellIcon />
      </div>
    </header>
  );
}

export default HeaderAdmin;
