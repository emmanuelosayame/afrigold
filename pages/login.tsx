import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useAuth } from '../utils/hooks/auth';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useMutation from 'swr/mutation';
import { api } from '../utils/api';
import { LoadingAbsolute } from '../components/Loading';
import { LoginResponse } from '../type/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { mutate } from 'swr';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   if (isAuthenticated && response) {
  //     const authenticatedRole = response.data.user.role;

  //     if (authenticatedRole === 1) {
  //       router.push('/menu');
  //     } else if (authenticatedRole === 2) {
  //       router.push('/admin/dashboard/dashboard');
  //     } else {
  //       console.error('Unknown role:', authenticatedRole);
  //     }
  //   }
  // }, [isAuthenticated, router, response]);

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remeberMe: z.boolean().default(false),
  });
  type Schema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const { isMutating, trigger } = useMutation(
    ['/auth/login'],
    async (key, { arg }: { arg: Pick<Schema, 'email' | 'password'> }) =>
      (await api.post<LoginResponse>(key[0], arg)).data,
    {
      onSuccess: (response) => {
        localStorage.setItem('auth.token', response.data.token);
        // toast.success(`logged in as ${response.data.user.email}`);
        router.push('/');
        mutate(['/auth/current'], response);
      },
    }
  );

  const onSubmit = (values: Schema) => {
    trigger({ email: values.email, password: values.password });
  };

  return (
    <div className='bg-custom-red h-screen flex justify-end'>
      {isMutating && <LoadingAbsolute />}
      <div className='w-full md:w-4/5 flex flex-col bg-white p-10 items-center'>
        <div className='max-w-screen-sm w-full mx-auto flex flex-col'>
          <div className='flex gap-1 self-end mb-16'>
            <p>Don’t have an account?</p>
            <Link href={'/register'} className='text-custom-red'>
              Sign Up
            </Link>
          </div>
          <h2 className='text-2xl font-bold text-center'>Hello Again!</h2>
          <p className='text-neutral-500 text-center'>Welcome back.</p>
          <div className='my-7'>
            <h4 className='text-sm font-semibold'>Log In</h4>
            <p className='text-md text-gray-600 '>
              Please enter details below to log into your account
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-2 items-center gap-y-2 mt-10'>
            <div className='flex flex-col mb-2 md:flex-row md:space-x-8 w-full'>
              <div className='flex flex-col w-full'>
                <label
                  htmlFor='email'
                  className='text-gray-600 font-medium mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  className='border p-2 rounded-lg w-full'
                  {...register('email')}
                />
              </div>
              <div className='flex flex-col w-full'>
                <label
                  htmlFor='password'
                  className='text-gray-600 font-medium mb-2'>
                  Password
                </label>
                <div className='relative w-full'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    placeholder='Password'
                    className='border p-2 rounded-lg w-full'
                    {...register('password')}
                  />
                  <div
                    className='absolute top-2 mt-2 right-3 cursor-pointer'
                    onMouseEnter={() => setShowPassword(true)}
                    onMouseLeave={() => setShowPassword(false)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row w-full items-center my-4 justify-between'>
              <Controller
                control={control}
                name='remeberMe'
                render={({ field: { value, onChange } }) => (
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      id='rememberMe'
                      className='mr-2 w-4 h-4'
                      checked={value}
                      onChange={() => onChange(!value)}
                    />
                    <label
                      htmlFor='rememberMe'
                      className='text-gray-600 font-medium'>
                      Remember Me
                    </label>
                  </div>
                )}
              />

              <Link
                className='btn-secondary text-[#D50606] hover:underline transition duration-300 mt-4'
                type='button'
                href={'/forgot-password'}>
                Forgot Password?
              </Link>
            </div>
            <button
              className='btn-red text-white rounded-[100px] w-full md:w-[350px] py-3 mt-10 md:mt-20 self-start '
              type='submit'>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
