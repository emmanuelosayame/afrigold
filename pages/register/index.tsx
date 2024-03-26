import Link from 'next/link';
import AuthLayout from '../../components/AuthLayout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useSWRMutation from 'swr/mutation';
import { api } from '../../utils/api';
import { Input } from '../../components/Inputs';
import { LoadingAbsolute } from '../../components/Loading';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CreateAccountResponse } from '../../type/api';
import { mutate } from 'swr';

const RegisterHome = () => {
  const router = useRouter();

  const schema = z
    .object({
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "passwords don't match",
      path: ['confirmPassword'],
    });
  type Schema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const { isMutating, trigger, data, error } = useSWRMutation(
    ['/auth/create-account'],
    async (key, { arg }: { arg: Omit<Schema, 'confirmPassword'> }) =>
      (await api.post(key[0], { ...arg, role: 1 })).data,
    {
      onError: (error) => {
        toast.error(error?.response?.data?.message || error.message);
      },
      onSuccess: (response) => {
        localStorage.setItem('auth.token', response.data.token);
        mutate(['/auth/current'], response);
        router.push('/register/welcome');
      },
    }
  );

  const onSubmit = ({ email, password }: Schema) => {
    trigger({ email, password });
  };

  return (
    <AuthLayout>
      {isMutating && <LoadingAbsolute />}

      <h2 className='text-3xl font-bold'>Create an account</h2>
      <p className='text-neutral-500 pl-10 mt-1'>Let’s get you started.</p>
      <div className='my-7'>
        <h4 className='text-sm font-semibold'>Register as a Buyer</h4>
        <p className='text-md text-gray-600 '>
          Please enter your informations below
        </p>
      </div>

      <p>GENERAL INFORMATION</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-2 items-center gap-y-2 mt-8'>
        <Input
          labelText='Email'
          placeholder='Enter email'
          {...register('email')}
          error={errors.email?.message}
        />
        <div className='flex flex-col md:flex-row gap-10'>
          <Input
            labelText='Password'
            placeholder='Enter password'
            {...register('password')}
            type='password'
            error={errors.password?.message}
          />
          <Input
            labelText='Confirm Password'
            placeholder='Confirm password'
            {...register('confirmPassword')}
            type='password'
            error={errors.confirmPassword?.message}
          />
        </div>

        <div className='flex flex-col md:flex-row w-full items-center my-4 gap-3'>
          <p>By clicking “Continue” I agree to NIgold </p>
          <Link
            className='btn-secondary text-[#D50606] hover:underline transition duration-300 underline'
            type='button'
            href={'/terms-of-service'}>
            Terms of Service
          </Link>
        </div>
        <button
          className='btn-red text-white rounded-[100px] w-full md:w-[350px] py-3 mt-5 md:mt-20 self-start'
          type='submit'>
          Continue
        </button>
      </form>
    </AuthLayout>
  );
};

export default RegisterHome;
