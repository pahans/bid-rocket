import { clsx } from 'clsx';

type InputProps = {
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  onChange: (e: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export const Input = (props: InputProps) => {
  return (
    <input
      id="firstName"
      type="number"
      step="0.01"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      autoComplete="given-name"
      className={clsx(
        'w-full mt-1 rounded-md px-2 py-2',
        'text-sm text-gray-700 placeholder:text-gray-500 ',
        'border border-gray-400 focus-visible:border-transparent',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
      )}
    />
  );
};
