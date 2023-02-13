import useSWR from 'swr';
var myHeaders = new Headers();
const { VITE_EX_RATE_API_KEY, VITE_EXCHANGE_API_URL } = import.meta.env;
myHeaders.append('apikey', VITE_EX_RATE_API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow' as RequestRedirect,
  headers: myHeaders,
};

const fetcher = (url: string) => fetch(url, requestOptions).then((res) => res.json());

const useExchangeRate = (from: string, to: string[]) => {
  const { data, error } = useSWR(
    `${VITE_EXCHANGE_API_URL}/latest?base=${from}&symbols=${to.join(',')}`,
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  return {
    data: data?.rates,
    error,
    isLoading: !data && !error,
  };
};

export { useExchangeRate };
