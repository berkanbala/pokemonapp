import { useNavigate } from "react-router-dom";
import styles from "./pokemon.module.scss";
import { useEffect, useState } from "react";
import { IPokemonDetails } from "../../../common/models/pokemonDetails";

export const Pokemon = (props: Props) => {
  const [pokeImage, setPokeImage] = useState<IPokemonDetails>(
    {} as IPokemonDetails
  );
  const { name } = props;
  const navigate = useNavigate();

  const handleClick = (name: string) => navigate(`/details/${name}`);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${name}`)
      .then((response) => response.json())
      .then((data) => setPokeImage(data))
      .catch((error) => console.warn(error));
  }, [name]);

  return (
    <div className={styles.container} onClick={() => handleClick(name)}>
      <div className={styles.image}>
        <img
          src={pokeImage?.sprites?.other?.dream_world?.front_default}
          width={250}
          height={250}
          alt="pokemonImage"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <span className={styles.pokemonName}>{name}</span>
        </div>
      </div>
    </div>
  );
};

interface Props {
  name: string;
}
