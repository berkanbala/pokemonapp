import { useParams } from "react-router-dom";
import styles from "./pokemonDetails.module.scss";
import { useGetPokemonDetails } from "../../common/hooks/useGetPokemonDetails";
export const PokemonDetails = () => {
  const { id } = useParams();

  const { pokemonDetails, pokemonDetailsError, pokemonDetailsLoading } =
    useGetPokemonDetails(id || "pikachu");

  if (pokemonDetailsLoading) return <div>loading...</div>;
  if (pokemonDetailsError) return <div>error</div>;
  return (
    <div className={styles.container}>
      <img
        alt=""
        className={styles.image}
        src={pokemonDetails?.sprites.other.dream_world.front_default}
      />
      <div className={styles.content}>
        {pokemonDetails?.forms.map((form: any, index: number) => (
          <h1 className={styles.title} key={index}>
            <span className={styles.pokemonName}>
              {pokemonDetails?.species?.name}
            </span>
          </h1>
        ))}
        <div className={styles.text}>
          <span>
            <b>height</b>-{pokemonDetails?.height}
          </span>
          <span>
            <b>weight</b>-{pokemonDetails?.weight}
          </span>
          <span>
            <b>hp</b>-{pokemonDetails?.stats[0]?.base_stat}
          </span>
          <span>
            <b>attack</b>-{pokemonDetails?.stats[1]?.base_stat}
          </span>
          <span>
            <b>defense</b>-{pokemonDetails?.stats[2]?.base_stat}
          </span>
          <span>
            <b>special-attack</b>-{pokemonDetails?.stats[3]?.base_stat}
          </span>
          <span>
            <b>special-defense</b>-{pokemonDetails?.stats[4]?.base_stat}
          </span>
          <span>
            <b>speed</b>-{pokemonDetails?.stats[5]?.base_stat}
          </span>
        </div>
      </div>
    </div>
  );
};
