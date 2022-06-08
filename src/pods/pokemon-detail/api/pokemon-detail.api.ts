import { PokemonEntityApi } from "./pokemon-detail.api-model";
import Axios, { AxiosResponse } from 'axios';

export const getPokemonByName = async (name: string): Promise<PokemonEntityApi> => {
    const result: AxiosResponse<PokemonEntityApi> = await Axios.get<PokemonEntityApi>(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return result.data;
}

