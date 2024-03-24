import useSWRMutation from 'swr/mutation';
import { LoadingAbsolute } from '../../components/Loading';
import { useAuth } from '../../utils/hooks/auth';
import Link from 'next/link';
import { api } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../../components/Inputs';
import AuthLayout from '../../components/AuthLayout';

const RegisterCustomer = () => {
  //   const { user, loading, error } = useAuth();

  const schema = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    gender: z.string().email(),
    phone_number: z.string().min(1),
    country: z.string().min(100),
    state: z.string().min(100),
    address: z.string().min(100),
    user_id: z.string().min(100),
  });
  type Schema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const { isMutating, trigger, data, error } = useSWRMutation(
    ['/profile/create'],
    async (key, { arg }: { arg: Schema }) =>
      (await api.post(key[0], { ...arg, role: 1 })).data
  );

  const onSubmit = (payload: Schema) => {
    trigger(payload);
  };

  return (
    <AuthLayout signIn={false}>
      {isMutating && <LoadingAbsolute />}

      <h2 className='text-3xl font-bold'>Create a Profile</h2>
      <p className='text-neutral-500 pl-10 mt-1'>Let’s get you started.</p>
      <div className='my-7'>
        <p className='text-md text-gray-600 '>
          Please enter your informations below
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-2 items-center gap-y-2 mt-8'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
          <Input
            labelText='First Name'
            placeholder='Enter first name'
            {...register('first_name')}
          />
          <Input
            labelText='Last Name'
            placeholder='Enter last name'
            {...register('last_name')}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-5 md:gap-10 my-4'>
          <Input
            labelText='Phone Number'
            placeholder='Enter phone number'
            {...register('phone_number')}
          />
          <Input
            labelText='Country'
            placeholder='Enter Country'
            {...register('country')}
          />
        </div>

        <div className='flex flex-col md:flex-row gap-5 md:gap-10 my-4'>
          <Input
            labelText='State'
            placeholder='Enter phone number'
            {...register('state')}
          />
          <Input
            labelText='Address'
            placeholder='Enter Country'
            {...register('address')}
          />
        </div>

        <div className='flex flex-col md:flex-row w-full items-center my-4 gap-3'>
          <p>By clicking “Continue” I agree to NIgold </p>
          <Link
            className='btn-secondary text-[#D50606] hover:underline transition duration-300 underline'
            type='button'
            href={'/forgot-password'}>
            Terms of Service
          </Link>
        </div>
        <button
          className='btn-red text-white rounded-[100px] w-full md:w-[350px] py-3 mt-5 md:mt-10 self-start'
          type='submit'>
          Continue
        </button>
      </form>
    </AuthLayout>
  );
};

export default RegisterCustomer;
