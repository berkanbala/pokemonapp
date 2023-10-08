import useSWR from "swr";
import { apiClient } from "../clients/appClients";

export const useGetPokemonDetails = (endpoint: string) => {
  const pokemonApiClient = apiClient({});

  const fetcher = (url: string) =>
    pokemonApiClient.get(url).then((response) => response.data);

  const shouldFetch = !!pokemonApiClient;

  const url = shouldFetch ? `/${endpoint}` : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfState: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    pokemonDetails: data || null,
    pokemonDetailsLoading: isValidating,
    pokemonDetailsError: error,
  };
};
