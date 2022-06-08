import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { baseRoutes } from './routes';
import {
  NoRouteScene,
  PokemonDetailScene,
  PokemonListScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" >
          <Route
          index
            element={<PokemonListScene />}
          />

          <Route
            path={baseRoutes.pokemon}
            element={<PokemonListScene />}
          />

          <Route
            path={baseRoutes.detail}
            element={<PokemonDetailScene />}
          />

          <Route
            path='*'
            element={<NoRouteScene />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
