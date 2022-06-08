import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/pokemon-detail.api-model';
import * as viewModel from './pokemon-detail.vm';

export const mapPokemonFromApiToVm = (
  pokemon: apiModel.PokemonEntityApi
): viewModel.PokemonEntity => ({
    id: pokemon.id,
    name: pokemon.name,
    type: pokemon.types[0].type.name,
    height: pokemon.height,
    abilities: pokemon.abilities
});