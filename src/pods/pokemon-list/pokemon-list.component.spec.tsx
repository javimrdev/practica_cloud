import React from "react";
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonEntity } from "./pokemon-list.vm";
import { BrowserRouter } from "react-router-dom";

describe('Pokemon list component tests', () => {
    const pokemonList: PokemonEntity[] = 
            [
              {
                "name": "bulbasaur",
                "id": '1'
              },
              {
                "name": "ivysaur",
                "id": '2'
              },
              {
                "name": "venusaur",
                "id": '3'
              }];

    it('data rendering', () => {
        const debounceStub = jest.fn();

        render(
            <BrowserRouter>
                <PokemonListComponent
                    pokemonList={pokemonList}
                    onDebounce={debounceStub} />
            </BrowserRouter>
        )

        
        const searcher = screen.queryByText('Search');
        const bulbasaur = screen.getAllByText('bulbasaur');

        expect(searcher).toBeInTheDocument();
        expect(bulbasaur).toHaveLength(1);
    });

    it('search event', () => {
        const debounceStub = jest.fn();

        render(
            <BrowserRouter>
                <PokemonListComponent
                    pokemonList={pokemonList}
                    onDebounce={debounceStub} />
            </BrowserRouter>
        )

        const searcherInput = screen.queryByRole('textbox');
        fireEvent.change(searcherInput, {target: {value: 'bulbasaur'}})
        
        expect(debounceStub).toBeCalled()
    })

})
