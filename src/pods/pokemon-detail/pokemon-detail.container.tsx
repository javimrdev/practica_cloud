import React from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "./api";
import { PokemonDetailComponent } from "./pokemon-detail.component";
import { mapPokemonFromApiToVm } from "./pokemon-detail.mapper";
import { PokemonEntity } from "./pokemon-detail.vm";

export const PokemonDetailContainer: React.FC = () => {
    const {name} = useParams();
    const [pokemon, setPokemon] = React.useState<PokemonEntity>(null);

    const onLoadPokemonList = async () => {
        try{
            getPokemonByName(name)
            .then(mapPokemonFromApiToVm)
            .then(setPokemon);
        }catch(error){
            console.error(error);
        }
    }

    React.useEffect(() => {
        onLoadPokemonList();
    }, [])

    return(
        <PokemonDetailComponent pokemon={pokemon} />
    )
}