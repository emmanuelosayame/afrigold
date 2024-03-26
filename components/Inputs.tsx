import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

type Props = {
  labelText: string;
  required?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export interface TextareaTempProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string;
  touched?: boolean;
  error?: string | string[];
  // hColor?: 'light' | 'dark';
  resize?: boolean;
  rows?: number;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ labelText, required, error, ...rest }, ref) => {
    return (
      <div className='w-full'>
        <label className='' htmlFor={labelText}>
          {labelText} {required && <span className='text-[red]'>*</span>}
        </label>
        <input
          id={labelText}
          ref={ref}
          {...rest}
          required={required}
          className={`border ${
            !!error ? 'border-red-500' : 'border-black'
          } bg-white rounded w-full p-2 md:p-3 mt-3`}
        />
        {error && <p className='text-xs text-red-500 mt-1'>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const TextareaTemp = forwardRef<HTMLTextAreaElement, TextareaTempProps>(
  (props, ref) => {
    //TODO switch ibg to inputprops
    const {
      labelText,
      touched,
      error,
      resize,
      className,
      required,
      rows = 4,
      ...rest
    } = props;

    return (
      <div className={`w-full ${className || ''}`}>
        <div
          className='form-input-text'
          style={{ height: labelText ? undefined : 'auto' }}>
          {labelText && (
            <label>
              {labelText}
              {required && <span>*</span>}
            </label>
          )}
          {error && <p>{error?.toString()}</p>}
        </div>
        <textarea
          ref={ref}
          {...rest}
          rows={rows}
          className={`border ${
            !!error ? 'border-red-500' : 'border-black'
          } bg-white rounded w-full p-2 md:p-3 mt-3`}
        />
      </div>
    );
  }
);

TextareaTemp.displayName = 'TextareaTemp';
