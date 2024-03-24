import useSWR from 'swr';
import { api } from '../api';
import { z } from 'zod';

export const useGetBusiness = () => {
  const { data, isLoading, error } = useSWR<any>(
    ['/business/info'],
    async ([url]) => (await api.get(url)).data,
    {
      onSuccess: (data) => {},
      revalidateOnFocus: false,
    }
  );

  return {
    user: data?.data,
    loading: isLoading,
    error: error?.response?.data as string,
  };
};

export const createMenuItemS = z.object({
  thumbnail: z
    .object({
      serverUrl: z.string().nullish(),
      file: z.any().nullish(),
    })
    .refine((schema) => (schema.file || schema.serverUrl ? true : false), {
      message: 'Select Pdf',
    }),
  business: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  category: z.string(),
});

export type createMenuItemS = string;

// const { data: business, isLoading } = useSWR<any>(
//   ['/business/info'],
//   async ([url]) => (await api.get(url)).data,
//   {
//     onSuccess: (data) => {},
//     revalidateOnFocus: false,
//   }
// );

// const {
//   isMutating,
//   trigger,
//   data: f,
// } = useSWRMutation(
//   ['/menu-item/create'],
//   async (key, { arg }: { arg: any }) => (await api.post(key[0], arg)).data
// );

// const imageRef = useRef<any>(null);
// const [file, setFile] = useState<any>(null);

// console.log(business?.data, file);

// <input
//         hidden
//         type='file'
//         ref={imageRef}
//         accept='image/jpeg, image/png, image/webp'
//         onChange={(e) => {
//           const file = e.target?.files?.[0];
//           if (!file) return;
//           setFile(file);
//         }}
//       />

//       <div className='flex flex-col gap-3 absolute top-10 z-50'>
//         <button
//           className='bg-white w-32'
//           onClick={() => imageRef.current?.click()}>
//           Clickk
//         </button>

//         <button
//           className='bg-white w-32'
//           onClick={() => {
//             const formData = new FormData();
//             formData.set('business', business?.data?.id);
//             formData.set('name', 'Ofada Rice');
//             formData.set('description', 'This is Ofada Rice. Sweettttt');
//             formData.set('price', '1500.0');
//             formData.set('category', 'Swallow');
//             formData.set('thumbnail', file);
//             trigger(formData);
//           }}>
//           CLickk
//         </button>
//       </div>
