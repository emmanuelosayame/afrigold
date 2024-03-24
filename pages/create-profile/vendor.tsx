import useSWRMutation from 'swr/mutation';
import Loading, { LoadingAbsolute } from '../../components/Loading';
import { useAuth } from '../../utils/hooks/auth';
import Link from 'next/link';
import { api } from '../../utils/api';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, TextareaTemp } from '../../components/Inputs';
import AuthLayout from '../../components/AuthLayout';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const RegisterVendor = () => {
  //   const { user, loading, error } = useAuth();

  const schema = z.object({
    name: z.string(),
    description: z.string(),
    website: z.string().optional(),
    cac_doc: z
      .object({
        serverUrl: z.string().nullish(),
        file: z.any().nullish(),
      })
      .refine((schema) => (schema.file || schema.serverUrl ? true : false), {
        message: 'Select Pdf',
      }),
    country: z.string(),
    // open_day_from: z.string(),
    // open_day_to: z.string(),
    open_hours_from: z.string(),
    open_hours_to: z.string(),
    state: z.string(),
    address: z.string(),
    working_days: z.array(z.number()),
    // working_time: z.array(z.number()),
  });
  type Schema = z.infer<typeof schema>;

  const workingDays = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const RegisterVendor = () => {
    const router = useRouter();
    const auth = useAuth();

    const cacFileRef = useRef<any>(null);

    useEffect(() => {
      if (!auth.user && !auth.loading) {
        router.replace('/register');
      }
    }, [auth]);

    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      setValue,
    } = useForm<Schema>({
      resolver: zodResolver(schema),
      defaultValues: { working_days: [] },
    });

    const { isMutating, trigger, data, error } = useSWRMutation(
      ['/business/setup'],
      async (key, { arg }: { arg: FormData }) =>
        (await api.post(key[0], arg)).data
    );

    const onSubmit = ({ cac_doc, working_days, ...rest }: Schema) => {
      if (!auth.user) return;
      const formData = new FormData();
      formData.set('cac', cac_doc.file);
      formData.set('user', auth.user?.id);
      formData.set('working_days', JSON.stringify(working_days));

      for (let data in rest as { [key: string]: any }) {
        // @ts-ignore
        formData.set(data, rest[data]);
      }
      trigger(formData);
    };

    if (auth.loading) return <Loading />;

    return (
      <AuthLayout signIn={false}>
        {isMutating && <LoadingAbsolute />}

        <h2 className='text-3xl font-bold'>Setup Business</h2>
        <p className='text-neutral-500 text-sm pl-5 mt-1 mb-4'>
          Let’s get you started.
        </p>
        <p>GENERAL INFORMATION</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-2 items-center gap-y-2 mt-8'>
          <div className='flex flex-col md:flex-row gap-10 w-full'>
            <Input
              labelText='Business Name'
              placeholder='Enter Name'
              {...register('name')}
            />
            <TextareaTemp
              labelText='Description'
              placeholder='Enter business description'
              {...register('description')}
            />
          </div>
          <div className='flex flex-col md:flex-row gap-10 my-4 w-full'>
            <Input
              labelText='Country'
              placeholder='Enter Country'
              {...register('country')}
            />
            <Input
              labelText='State'
              placeholder='Enter State'
              {...register('state')}
            />
          </div>
          <div className='flex flex-col md:flex-row gap-10 my-4 w-full'>
            <Input
              labelText='Address'
              placeholder='Enter Address'
              {...register('address')}
            />
            <Controller
              control={control}
              name={'cac_doc'}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div className='flex w-full flex-col gap-2'>
                  <input
                    hidden
                    type='file'
                    ref={cacFileRef}
                    accept='application/pdf,application/vnd.ms-excel'
                    onChange={(e) => {
                      const file = e.target?.files?.[0];
                      if (!file) return;
                      onChange({ file });
                    }}
                  />
                  <label>
                    Cac File (PDF)
                    <span className='text-custom-red ml-1'>*</span>
                  </label>
                  {value?.file || value?.serverUrl ? (
                    <div className='flex flex-col gap-3'>
                      <p>{value.file?.name}</p>
                      <button
                        type='button'
                        className='bg-custom-red py-1 px-5 rounded-xl text-white'
                        onClick={() => cacFileRef.current?.click()}>
                        Change
                      </button>
                    </div>
                  ) : (
                    <div className='flex '>
                      <button
                        type='button'
                        className='bg-custom-red py-1 px-5 rounded-xl text-white'
                        onClick={() => cacFileRef.current?.click()}
                        style={{ border: error ? '1px solid red' : '' }}>
                        Upload Document
                      </button>
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          <div className='flex flex-col md:flex-row gap-10 my-4 w-full'>
            <Input
              labelText='Open Hours From'
              placeholder='Enter Time'
              {...register('open_hours_to')}
            />
            <Input
              labelText='Open Hours To'
              placeholder='Enter Time'
              {...register('open_hours_from')}
            />
          </div>

          <div className='flex gap-4 w-full'>
            <Controller
              name='working_days'
              control={control}
              render={({ field: { value } }) => (
                <div className='flex flex-col gap-2 w-1/2'>
                  <h4>Working Days</h4>
                  <div className='flex gap-4'>
                    {workingDays.map((day, index) => {
                      const picked = value.includes(index + 1);
                      return (
                        <button
                          className='text-sm flex flex-col gap-1 items-center'
                          key={day}
                          onClick={() =>
                            setValue(
                              'working_days',
                              picked
                                ? value.filter((x) => x !== index + 1)
                                : [...value, index + 1]
                            )
                          }>
                          <input type='checkbox' checked={picked} />
                          <span>{day}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            />
          </div>

          <div className='flex flex-col md:flex-row w-full items-center my-4 gap-3 mt-10'>
            <p>By clicking “Continue” I agree to NIgold </p>
            <Link
              className='btn-secondary text-[#D50606] hover:underline transition duration-300 underline'
              type='button'
              href={'/forgot-password'}>
              Terms of Service
            </Link>
          </div>
          <button
            className='btn-red text-white rounded-[100px] w-full md:w-[350px] py-3 self-start'
            type='submit'>
            Continue
          </button>
        </form>
      </AuthLayout>
    );
  };
};

export default RegisterVendor;
