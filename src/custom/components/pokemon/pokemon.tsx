import { useGetPokemonsDetails } from "../../../common/hooks/useGetPokemonDetails";
import styles from "./pokemon.module.scss";
import { Link } from "react-router-dom";

export const Pokemon = (props: Props) => {
  const { pokemon } = props;

  const { pokemonDetails, pokemonDetailsError, pokemonDetailsLoading } =
    useGetPokemonsDetails(pokemon.name);

  const getPokemonDetail = () => {};

  if (pokemonDetailsLoading) return <div>loading...</div>;
  if (pokemonDetailsError) return <div>error</div>;
  return (
    <div className={styles.container} onClick={getPokemonDetail}>
      <Link to={`/details/${pokemon.name}`}>
        <div className={styles.image}>
          <img
            alt=""
            src={pokemonDetails.sprites.other.dream_world.front_default}
            width={250}
            height={250}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={styles.pokemonName}>{pokemon.name} </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface Props {
  pokemon: {
    url: string;
    name: string;
  };
}
