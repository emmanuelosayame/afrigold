import { ReactNode } from 'react';
import HeaderAdmin from './Header';
import SideBar from './SideBar';

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-screen'>
      <SideBar />
      <div className='w-[85%]'>
        <HeaderAdmin />
        <section className='p-5'>{children}</section>
      </div>
    </div>
  );
};

export default LayoutAdmin;
