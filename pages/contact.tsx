import Image from 'next/image';
import image from '../public/feedback-image.png';
import { Input } from '../components/Inputs';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { z } from 'zod';
import { api } from '../utils/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingAbsolute } from '../components/Loading';
import { toast } from 'react-toastify';

const Feedback = () => {
  const schema = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    comment: z.string().min(1).max(500),
  });
  type Schema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const { isMutating, trigger, data, error } = useSWRMutation(
    ['/feedback'],
    async (key, { arg }: { arg: Schema }) => (await api.post(key[0], arg)).data,
    {
      onSuccess: () => {
        toast.success('Thank you for your feedback');
        reset();
      },
    }
  );

  return (
    <>
      {isMutating && <LoadingAbsolute />}
      <div className='p-5'>
        <Image
          alt='image'
          src={image}
          width={1000}
          height={700}
          className='w-full'
        />

        <form
          className='max-w-screen-2xl mx-auto py-10'
          onSubmit={handleSubmit((payload) => trigger(payload))}>
          <h4 className='font-bold text-3xl md:text-4xl'>Customer Feedback </h4>
          <p className='text-lg md:text-xl font-'>
            and how we use it to improve our service
          </p>

          <h4 className='font-bold text-2xl mt-10'>How was your Experience?</h4>
          <p className='text-lg md:text-xl font-'>
            Thank you for dinning with us! We hope you were satisfied with your
            order(s).
          </p>

          <div className='flex gap-5 md:gap-20 py-5 md:p-10'>
            <Input labelText='First Name' {...register('first_name')} />
            <Input labelText='Last Name' {...register('last_name')} />
          </div>
          <div className='md:w-1/2 md:px-10'>
            <Input labelText='Email' {...register('email')} />
          </div>
          <div className='flex flex-col gap-3 md:px-10 mt-5 md:mt-10'>
            <label>Write your feedback</label>

            <textarea
              placeholder=''
              rows={8}
              className='outline-none p-3 border border-black rounded-lg'
              {...register('comment')}
            />
          </div>

          <div className='w-full flex justify-end mt-7 px-10'>
            <button
              type='submit'
              className='bg-[#D50606] rounded-[250px] py-3 md:py-5 w-full md:w-1/3 text-white text-lg font-semibold'>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
