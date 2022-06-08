import { PokemonBoxComponent } from "common/components/pokemon-box/pokemon-box";
import React from "react";
import { PokemonEntity } from "./pokemon-list.vm";
import { css } from "@emotion/react";
import PokemonImage from "assets/pokelogo.svg";
import { SearcherComponent } from "common/components/searcher/searcher";

interface Props {
    pokemonList: PokemonEntity[];
    onDebounce: (name: string) => void;
}

const pokemonListContainer = css`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;


const centeredElement = css`
    width: 100%;
    display: flex;
    justify-content: center;
    
`;

const image = css`
    height: 100px;
`;

export const PokemonListComponent: React.FC<Props> = (props) => {
const { pokemonList, onDebounce } = props;

    return (
        <div css={pokemonListContainer}>
            <div css={centeredElement}>
                <img css={image} src={PokemonImage} />
            </div>
            <div css={centeredElement}>
                <SearcherComponent searchHandler={onDebounce} />
            </div>
                {
                    pokemonList.map(e =>
                        <PokemonBoxComponent key={e.id} id={e.id} name={e.name} />
                    )
                }
            
        </div>
    )
}