import * as RadixSelect from '@radix-ui/react-select';
import { CSSProperties } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface SelectProps<T> {
  triggerStyle?: CSSProperties;
  triggerClassName?: string;
  contentStyle?: CSSProperties;
  contentClassName?: string;
  defaultSelected?: string;
  onValueChange?: (value: T) => void;
  options?: { value: string; item: string }[];
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  open?: boolean;
  setOpen?: (state: boolean) => void;
  header?: string;
}

const Select = <T,>({
  defaultSelected,
  onValueChange = () => {},
  options = [],
  contentClassName = 'bg-white text-black',
  contentStyle,
  triggerStyle,
  triggerClassName,
  value,
  disabled,
  placeholder,
  open,
  setOpen,
  header,
}: SelectProps<T>) => {
  return (
    <RadixSelect.Root
      open={open}
      onOpenChange={setOpen}
      disabled={disabled}
      value={value}
      defaultValue={defaultSelected}
      onValueChange={(e) => onValueChange(e as any)}>
      <div className='space-y-3 text-lg'>
        <p>{header}</p>
        <RadixSelect.Trigger
          type='button'
          style={triggerStyle}
          className={`${
            triggerClassName || 'border-b bg-transparent min-w-32 px-3'
          } outline-none flex justify-between items-center disabled:opacity-40`}
          aria-label='Select'>
          <RadixSelect.Value
            placeholder={placeholder}
            className='text-center text-lg placeholder:text-neutral-500'
          />
          <RadixSelect.Icon className='ml-1 '>
            <BsChevronDown width={22} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
      </div>
      <RadixSelect.Portal>
        <RadixSelect.Content
          style={contentStyle}
          className={` ${contentClassName} shadow-lg z-50 overflow-hidden rounded-lg border`}>
          <RadixSelect.Viewport className=''>
            {options.map((selectItem) => (
              <RadixSelect.Item
                key={selectItem.value}
                value={selectItem.value}
                className='py-2 px-3 text-black hover:bg-white
                 hover:text-black cursor-pointer text-base outline-none'>
                <RadixSelect.ItemText>{selectItem.item}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
