import { useEffect, useState } from "react";
import { Loading } from "../../common/components/loading/loading";
import { Pokemon } from "../../custom/components/pokemon/pokemon";
import { IPokemon } from "../../common/models/pokomen";
import styles from "./home.module.scss";
export const Home = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {pokemons?.map((pokemon: IPokemon, index: any) => (
          <Pokemon key={index} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};
