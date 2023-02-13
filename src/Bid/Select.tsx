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
  onChange: (currency: any) => void;
  options: string[];
};

export const Select = (props: SelectProps) => {
  const { disabled, onChange, options } = props;
  return (
    <SelectPrimitive.Root defaultValue="USD" disabled={disabled} onValueChange={onChange}>
      <SelectPrimitive.Trigger asChild aria-label="Currency">
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
            {options.map((f, i) => (
              <SelectPrimitive.Item
                key={`${f}-${i}`}
                value={f}
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
