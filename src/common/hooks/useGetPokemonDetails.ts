import { apiClient } from "../clients/appClients";
import useSWR from "swr";

export const useGetPokemonDetails = (endPoint: string) => {
  const pokemonApiClient = apiClient({});

  const fetcher = (url: string) =>
    pokemonApiClient.get(url).then((res) => res.data);

  const shouldFetch = !!pokemonApiClient;

  const url = shouldFetch ? `/${endPoint}` : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    pokemonDetails: data || null,
    pokemonDetailsLoading: isValidating,
    pokemonDetailsError: error,
  };
};
