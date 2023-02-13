import useSWR from 'swr';
var myHeaders = new Headers();
const { VITE_EX_RATE_API_KEY } = import.meta.env;
myHeaders.append('apikey', VITE_EX_RATE_API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow' as RequestRedirect,
  headers: myHeaders,
};

const fetcher = (url: string) => fetch(url, requestOptions).then((res) => res.json());

const EXCHANGE_API_URL = 'https://api.apilayer.com/exchangerates_data';

const useExchangeRate = (from: string, to: string) => {
  const { data, error } = useSWR(
    `${EXCHANGE_API_URL}/latest?amount=1000&base=${from}&symbols=${to}`,
    fetcher,
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export { useExchangeRate };
