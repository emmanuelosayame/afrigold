import Image from 'next/image';
import { Services } from '../components/GuideSection';
import image1 from '../public/about.png';
import image2 from '../public/about-section.png';
import useSWRMutation from 'swr/mutation';
import { api } from '../utils/api';
import Loading from '../components/Loading';

const AboutPage = () => {
  const { trigger, isMutating } = useSWRMutation(['test'], async () =>
    api.post('/auth/create-account', {
      email: 'newuser@example.com',
      password: 'mypassword',
      role: 3,
    })
  );

  return (
    <div className=''>
      {isMutating && <Loading />}

      <div className='md:h-screen relative bg-black '>
        <div className='text-white flex justify-end items-center max-w-screen-xl mx-auto h-full'>
          <div className='w-[500px] xl:w-[600px] flex flex-col gap-5 items-end py-20 px-10 md:p-10 md:mr-10 xl:mr-0'>
            <h4 className='text-[30px] md:text-[35px] font-bold'>
              ARE YOU HUNGRY?
            </h4>
            <h5 className='xl:text-[32px] text-[20px] md:text-[25px] md:text-end my-2 md:my-0'>
              Get delicious meals with home made taste with just a click
            </h5>
            <button className='btn-red rounded-[100px] py-3 px-12 mr-10'>
              ORDER NOW
            </button>
          </div>
          <Image
            alt='noodles'
            src={image1}
            className='absolute -bottom-10 xl:-left-10 -left-16 w-[750px] xl:w-[900px] hidden md:block'
          />
        </div>
        bu
      </div>

      <section className='max-w-screen-lg mx-auto p-5 space-y-5'>
        <h4 className='text-3xl font-medium text-center'>ABOUT US</h4>

        <p className='text-lg'>
          Nigold is a decentralized platform of food purchasing and logistics
          services, A platform that connects businesses directly to their end
          users to create accessibility, convenience, and ease within the
          hospitality industry. We aim to be the best digital menu for
          restaurants across Africa and globally with soft food and logistics
          activities across other sectors.
        </p>

        <div className='flex flex-col md:flex-row py-10'>
          <Image alt='our-mission' src={image2} className='w-full md:w-2/3' />
          <div className='w-full md:w-1/3 text-lg flex flex-col justify-center gap-10'>
            <p>
              Our mission: We aim to establish perfect peer-to-peer platforms
              for food purchases, excellent digital menus for restaurants and
              food lovers, and peer-to-peer logistics services.
            </p>
            <p>
              Our vision: To be the leading provider of food and logistics
              impacting growth in the hospitality industry through enhanced
              technology.
            </p>
          </div>
        </div>

        <div className='pt-5'>
          <h5 className='text-2xl font-semibold text-center'>OUR SERVICES</h5>

          <Services />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
