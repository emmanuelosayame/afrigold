import { Content, Overlay, Portal, Root } from '@radix-ui/react-dialog';
import { useStore } from '../store/index';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';

const DownloadAppsModal = () => {
  const open = useStore(
    (state) => state.appsModal === 'open' || state.appsModal === 'never-opened'
  );
  const closeModal = useStore((state) => state.closeAppsModal);

  return (
    <Root open={open} onOpenChange={() => {}}>
      <Overlay className='post-pay-dialog-overlay z-40 inset-0 fixed bg-black/40' />
      <Portal>
        <Content
          className='post-pay-dialog-content pointer-events-auto fixed top-1/2 
          left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-[15px] 
          drop-shadow-top w-11/12 md:w-2/5 md:h-96
         bg-white items-center flex flex-col gap-3 p-5 md:p-3'>
          <div className='flex justify-between w-full p-2'>
            <div />
            <h3 className='p-2 font-semibold text-lg'>
              Download App to Continue
            </h3>

            <button
              onClick={closeModal}
              className='outline-none hover:bg-black/20 rounded-full p-1'>
              <IoIosClose className='' size={30} />
            </button>
          </div>

          <div className='flex flex-col gap-5 w-11/2'>
            <button className='flex gap-3 items-center bg-[red] rounded-[20px] px-10 py-2'>
              <div className='w-[100px]'>
                <Image
                  src='/google-play-icon.png'
                  alt='Google Play'
                  width={100}
                  height={100}
                  className=''
                />
              </div>
              <p className=' text-white'>Download on Google Play</p>
            </button>
            <button className='flex gap-3 items-center bg-[red] rounded-[20px] px-10 py-2'>
              <div className='w-[100px]'>
                <Image
                  src='/app-store--icon.png'
                  alt='App Store'
                  width={100}
                  height={100}
                />
              </div>
              <p className='text-white'>Download on App Store</p>
            </button>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default DownloadAppsModal;
