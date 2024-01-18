import { Loading } from "../../common/components/loading/loading";
import { useGetPokemons } from "../../common/hooks/useGetPokemons";
import { Pokemon } from "../../custom/components/pokemon/pokemon";
// import { NotFound } from "../notFound/notFound";
import styles from "./home.module.scss";
export const Home = () => {
  const { pokemons, pokemonsError, pokemonsLoading } = useGetPokemons();

  // if (pokemonsLoading) return <div>loading...</div>;
  if (pokemonsLoading) return <Loading />;
  if (pokemonsError) return <div>failed to load</div>;
  // if (pokemonsError) return <NotFound />;

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
