import { clsx } from 'clsx';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import Button from './Button';

type SelectProps = {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = (props: SelectProps) => {
  const { disabled } = props;
  return (
    <SelectPrimitive.Root defaultValue="eur" disabled={disabled}>
      <SelectPrimitive.Trigger asChild aria-label="Food">
        <Button>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="bg-white p-2 rounded-lg shadow-lg">
          <SelectPrimitive.Group>
            {['USD', 'EUR', 'GBP'].map((f, i) => (
              <SelectPrimitive.Item
                disabled={f === 'EUR'}
                key={`${f}-${i}`}
                value={f.toLowerCase()}
                className={clsx(
                  'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-100',
                  'radix-disabled:opacity-50',
                  'focus:outline-none select-none',
                )}
              >
                <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};
