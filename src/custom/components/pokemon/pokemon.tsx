import { Link } from "react-router-dom";
import { useGetPokemonDetails } from "../../../common/hooks/useGetPokemonDetails";
import styles from "./pokemon.module.scss";
import { Loading } from "../../../common/components/loading/loading";

export const Pokemon = (props: Props) => {
  const { pokemon } = props;

  const { pokemonDetails, pokemonDetailsError, pokemonDetailsLoading } =
    useGetPokemonDetails(pokemon.name);

  const getPokemonDetail = () => {};

  if (pokemonDetailsLoading) return <Loading />;
  if (pokemonDetailsError) return <div>error</div>;
  return (
    <div className={styles.container} onClick={getPokemonDetail}>
      <Link to={`/details/${pokemon.name}`}>
        <div className={styles.image}>
          {/* <img src={pokemon?.image} alt="image" className={styles.image} /> */}
          {/* <img
          src={pokemon?.sprites.other.dream_world.front_default}
          alt="image"
          className={styles.image}
        /> */}
          <img
            src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
            // src={pokemonDetails?.sprites?.front_default}
            // src={pokemonDetails?.image}
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={styles.pokemonName}>{pokemon?.name}</span>
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
