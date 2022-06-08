import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/pokemon-list.api-model';
import * as viewModel from './pokemon-list.vm';

const mapPokemonFromApiToVm = (
  pokemon: apiModel.PokemonEntityApi
): viewModel.PokemonEntity => ({
  ...pokemon,
});

export const mapPokemonListFromApiToVm = (
  pokemonList: apiModel.PokemonEntityApi[]
): viewModel.PokemonEntity[] =>
  mapToCollection(pokemonList, e => mapPokemonFromApiToVm(e));
