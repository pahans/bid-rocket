import { clsx } from 'clsx';
import React from 'react';

type Props = Omit<React.ComponentProps<'button'>, 'className'> & { isLoading?: boolean };

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => (
  <>
    <button
      ref={ref}
      {...props}
      className={clsx(
        'inline-flex select-none items-center justify-center rounded-md px-6 py-3 text-sm font-medium',
        'bg-white text-gray-700 hover:bg-gray-50',
        'hover:bg-gray-50',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        // Register all radix states
        'group',
        'radix-state-open:bg-gray-50',
        'radix-state-on:bg-gray-50',
        'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
      )}
    >
      {props.isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  </>
));

Button.displayName = 'Button';
export default Button;
