import React, { useState } from "react";
import { mapPokemonListFromApiToVm } from "pods/pokemon-list";
import { getPokemonCollection } from "./api/pokemon-list.api";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonEntity } from "./pokemon-list.vm";
import { useDebouncedCallback } from "use-debounce";

export const PokemonListContainer: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<PokemonEntity[]>([]);
    const [filter, setFilter] = useState<string>('');

    const debouncedFilter = useDebouncedCallback((value: string) => {
        setFilter(value);
    }, 1000);

    const onLoadPokemonList = async () => {
        try{
            getPokemonCollection(filter)
            .then(mapPokemonListFromApiToVm)
            .then(setPokemonList);
        }catch(error){
            console.error(error);
        }
    }

    React.useEffect(() => {
        onLoadPokemonList();
    }, [filter])

    return(
        <PokemonListComponent 
            pokemonList={pokemonList} 
            onDebounce={debouncedFilter} />
    )
}