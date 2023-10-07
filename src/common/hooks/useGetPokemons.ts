import useSWR from "swr";
import { apiClient } from "../clients/appClients";

export const useGetPokemons = () => {
  const pokemonApiClient = apiClient();

  const fetcher = (url: string) =>
    pokemonApiClient.get(url).then((response) => response.data);
  const shouldFetch = !!pokemonApiClient;

  const url = shouldFetch ? "/" : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfState: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    pokemons: data?.results || null,
    pokemonsLoading: isValidating,
    pokemonsError: error,
  };
};
