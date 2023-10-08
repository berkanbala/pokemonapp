import styles from "./home.module.scss";
import { useGetPokemons } from "../../common/hooks/useGetPokemons";
import { Pokemon } from "../../custom/components/pokemon/pokemon";

export const Home = () => {
  const { pokemons, pokemonsError, pokemonsLoading } = useGetPokemons();

  if (pokemonsLoading) return <div>loading...</div>;
  if (pokemonsError) return <div>failed to load</div>;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {pokemons?.map((pokemon: any) => (
          <Pokemon key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
