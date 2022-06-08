
    export interface Ability2 {
        name: string;
        url: string;
    }

    export interface Ability {
        is_hidden: boolean;
        slot: number;
        ability: Ability2;
    }


    export interface Species {
        name: string;
        url: string;
    }

    export interface Type2 {
        name: string;
        url: string;
    }

    export interface Type {
        slot: number;
        type: Type2;
    }

    export interface Type4 {
        name: string;
        url: string;
    }

    export interface Type3 {
        slot: number;
        type: Type4;
    }


    export interface PokemonEntityApi {
        id: number;
        name: string;
        height: number;
        weight: number;
        abilities: Ability[];
        species: Species;
        types: Type[];
    }