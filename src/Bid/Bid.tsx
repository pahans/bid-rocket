import { SWRConfig } from 'swr';
import { Input } from './Input';
import Button from './Button';
import { Select } from './Select';
import localStorageProvider from '../utils/localStorageProvider';

type Currency = 'USD' | 'EUR' | 'GBP';

type BidProps = {
  isLoading?: boolean;
  error?: string;
  success?: string;
  previousBids: { timestamp: Date; amount: number; currency: Currency }[];
  onBid: (amount: number, currency: Currency) => void;
};

const Bid = (props: BidProps) => {
  const { isLoading, error, success, previousBids, onBid } = props;
  return (
    <div className="p-10">
      <div>
        <form
          className="w-full flex flex-wrap"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted');
          }}
        >
          <div className="w-full md:w-52 px-3 mb-6 md:mb-0">
            <Input value="" onChange={() => {}} disabled={isLoading} isLoading={isLoading} />
          </div>
          <div className="w-full md:w-28 px-3 mb-6 md:mb-0">
            <Select disabled={isLoading}></Select>
          </div>
          <div className="w-full md:w-44 px-3 mb-6 md:mb-0">
            <Button disabled={isLoading} isLoading={isLoading}>
              Place a Bid
            </Button>
          </div>
          <div className="w-full md:w-96 px-3 mb-6 md:mb-0">
            <Button disabled={isLoading}>See your bid history</Button>
          </div>
        </form>
      </div>
      <div>
        {success && <div className="my-4 px-3 text-green-600">{success}</div>}
        {error && <div className="my-4 px-3 text-red-600">{error}</div>}
      </div>
    </div>
  );
};

export const WrappedBid = (props: BidProps) => (
  <SWRConfig value={{ provider: localStorageProvider as any }}>
    <Bid {...props} />
  </SWRConfig>
);
