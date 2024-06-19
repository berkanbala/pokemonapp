import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./pokemonDetails.module.scss";
import { IPokemonDetails } from "../../common/models/pokemonDetails";

export const PokemonDetails = () => {
  const { id } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>(
    {} as IPokemonDetails
  );

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data))
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        alt=""
        src={pokemonDetails?.sprites?.other?.dream_world.front_default}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.pokemonName}>
            {pokemonDetails?.species?.name}
          </span>
        </h1>
        <div className={styles.text}>
          <span>
            <b>height</b>-{pokemonDetails?.height}
          </span>
          <span>
            <b>weight</b>-{pokemonDetails?.weight}
          </span>
          <span>
            <b>hp</b>-{pokemonDetails?.stats?.[0]?.base_stat}
          </span>
          <span>
            <b>attack</b>-{pokemonDetails?.stats?.[1]?.base_stat}
          </span>
          <span>
            <b>defense</b>-{pokemonDetails?.stats?.[2]?.base_stat}
          </span>
          <span>
            <b>special-attack</b>-{pokemonDetails?.stats?.[3]?.base_stat}
          </span>
          <span>
            <b>special-defense</b>-{pokemonDetails?.stats?.[4]?.base_stat}
          </span>
          <span>
            <b>speed</b>-{pokemonDetails?.stats?.[5]?.base_stat}
          </span>
        </div>
      </div>
    </div>
  );
};
