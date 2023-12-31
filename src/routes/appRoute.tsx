import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { PokemonDetails } from "../pages/pokemonDetails/pokemonDetails";
import { FavoritePokemon } from "../pages/favoritePokemon/favoritePokemon";
import { NotFound } from "../pages/notFound/notFound";
import { AppLayout } from "../layout/appLayout/appLayout";

export const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details:id" element={<PokemonDetails />} />
        <Route path="/favorites" element={<FavoritePokemon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
