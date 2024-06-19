export interface IPokemonDetails {
  image: string;
  id: string;
  height: string;
  weight: string;
  stats: {
    base_stat: string;
  }[];
  species: {
    name: string;
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}
