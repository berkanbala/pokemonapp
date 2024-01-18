import { useParams } from "react-router-dom";
import styles from "./pokemonDetails.module.scss";
import { useGetPokemonDetails } from "../../common/hooks/useGetPokemonDetails";
import { Loading } from "../../common/components/loading/loading";
import { NotFound } from "../notFound/notFound";
// import { useEffect } from "react";

export const PokemonDetails = () => {
  const { id } = useParams();

  const { pokemonDetails, pokemonDetailsError, pokemonDetailsLoading } =
    useGetPokemonDetails(id || "pikachu");
  // useEffect(() => {

  // }, [id]);

  // if (pokemonDetailsLoading) return <div>loading</div>;
  if (pokemonDetailsLoading) return <Loading />;
  // if (pokemonDetailsError) return <div>error</div>;
  if (pokemonDetailsError) return <NotFound />;

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        alt=""
        src={pokemonDetails?.sprites.other.dream_world.front_default}
        //sprites other": "dream_world": "front_default"
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
