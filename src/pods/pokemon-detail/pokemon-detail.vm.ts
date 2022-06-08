export interface PokemonEntity {
    id: number;
    name: string;
    type: string;
    height: number;
    abilities: Ability[];
}

export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: Ability2;
}