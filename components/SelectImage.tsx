import { useRef } from 'react';
import { Controller } from 'react-hook-form';
import Image from 'next/image';

interface Props {
  control: any;
  name?: string;
  label: string;
  required?: boolean;
}

const SelectImage = ({ control, name, label: labelText, required }: Props) => {
  const imageRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      control={control}
      name={name || 'cover'}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className='flex w-full flex-col gap-2'>
          <input
            hidden
            type='file'
            ref={imageRef}
            accept='image/jpeg, image/png, image/webp'
            onChange={(e) => {
              const file = e.target?.files?.[0];
              if (!file) return;
              value?.previewUrl && URL.revokeObjectURL(value.previewUrl);
              onChange({ previewUrl: URL.createObjectURL(file), file });
            }}
          />
          <label>
            {labelText}{' '}
            {required && <span className='text-custom-red ml-1'>*</span>}{' '}
          </label>
          {value?.previewUrl || value?.serverUrl ? (
            <div className='flex flex-col gap-3'>
              <Image
                alt='preview'
                src={value?.previewUrl || value?.serverUrl}
                width={500}
                height={500}
                className='w-[800px] h-[300px] border rounded-lg'
              />
              <button
                type='button'
                className='bg-custom-red py-1 px-5 rounded-xl text-white'
                onClick={() => imageRef.current?.click()}>
                Change
              </button>
            </div>
          ) : (
            <div className='flex '>
              <button
                type='button'
                className='bg-custom-red py-1 px-5 rounded-xl text-white'
                onClick={() => imageRef.current?.click()}
                style={{ border: error ? '1px solid red' : '' }}>
                Upload image
              </button>
            </div>
          )}
        </div>
      )}
    />
  );
};

export default SelectImage;
