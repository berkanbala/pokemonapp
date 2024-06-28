import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { PokemonDetails } from "../pages/pokemonDetails/pokemonDetails";
import { AppLayout } from "../layout/appLayout/appLayout";
import { NotFound } from "../pages/notFound/notFound";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
