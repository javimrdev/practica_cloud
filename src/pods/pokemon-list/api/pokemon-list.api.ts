import { gql, GraphQLClient } from 'graphql-request'
import {PokemonEntityApi} from './pokemon-list.api-model'

interface GetPokemonCollectionResponse {
    pokemons: PokemonEntityApi[];
}

export const getPokemonCollection = async (name: string): Promise<PokemonEntityApi[]> => {
    const filter: string  = name ? ` name: {_eq: "${name}"}, ` : '';

    const query = gql`
        query {
            pokemons: pokemon_v2_pokemonspecies(where: { ${filter} pokemon_v2_generation: {name: {_eq: "generation-i"}}}, order_by: {id: asc}) {
                name
                id
            }
      }
    `;

      const graphqlClient = new GraphQLClient(process.env.ApiPokemonGQL);
      const {pokemons} = await graphqlClient.request<GetPokemonCollectionResponse>(query);

      return pokemons;
}