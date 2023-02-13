import { SWRConfig } from 'swr';
import { Input } from './Input';
import Button from './Button';
import { Select } from './Select';
import localStorageProvider from '../utils/localStorageProvider';
import { useReducer } from 'react';
import { useExchangeRate } from '../hooks/useExchangeRate';
import { HistoryModal } from './HistoryModal';

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

type BidProps = {
  isLoading?: boolean;
  error?: string;
  success?: string;
  previousBids: { timestamp: Date; amount: number; currency: Currency }[];
  onBid: (amount: number, currency: Currency) => void;
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'editcurrentbid':
      return { ...state, currentBid: action.payload.newBid };
    case 'changecurrency':
      return {
        ...state,
        currency: action.payload.currency,
        currentBid: (
          state.currentBid * action.payload.exchangeRate[action.payload.currency]
        ).toFixed(2),
      };
    default:
      return state;
  }
};

const Bid = (props: BidProps) => {
  const { isLoading, error, success, onBid, previousBids = [] } = props;
  const [state, dispatch] = useReducer(reducer, { currentBid: 0, currency: 'USD' });
  const currencyList: string[] = Object.values(Currency);
  const { data: exchangeRate } = useExchangeRate(state.currency, currencyList);
  if (!isLoading && !exchangeRate) {
    return <div>Could not fetch Exchange rates, please make sure API Key is set.</div>;
  }
  return (
    <div className="p-10">
      <div>
        <form
          className="w-full flex flex-wrap"
          onSubmit={(e) => {
            onBid(state.currentBid, state.currency);
            e.preventDefault();
          }}
        >
          <div className="w-full md:w-52 px-3 mb-6 md:mb-0">
            <Input
              value={state.currentBid}
              onChange={(newBid) => dispatch({ type: 'editcurrentbid', payload: { newBid } })}
              disabled={isLoading}
              isLoading={isLoading}
            />
          </div>
          <div className="w-full md:w-28 px-3 mb-6 md:mb-0">
            <Select
              disabled={isLoading}
              onChange={(currency: Currency) =>
                dispatch({ type: 'changecurrency', payload: { currency, exchangeRate } })
              }
              options={currencyList}
            ></Select>
          </div>
          <div className="w-full md:w-44 px-3 mb-6 md:mb-0">
            <Button disabled={isLoading} isLoading={isLoading}>
              Place a Bid
            </Button>
          </div>
          <div className="w-full md:w-96 px-3 mb-6 md:mb-0">
            <HistoryModal previousBids={previousBids} />
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
