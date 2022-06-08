import React from 'react'
import { PokemonEntity } from './pokemon-detail.vm'
import { css } from '@emotion/react'
import { bp, mq } from 'common/css/css-helper'
import { useNavigate } from 'react-router-dom'

interface Props {
    pokemon: PokemonEntity
}

const detailBox = css`
    padding: 10px;
    background-color: whitesmoke;
    border: 1px solid black;
    width: calc(100% - 30px);
    margin-top: 5px;

    ${mq[bp.xs]} {
        width: 250px;
        margin-top: 50px;
    }
`;

const boxInfo = css`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const closeIconDiv = css`
    display:flex;
    justify-content: flex-end;
`;

const closeIcon = css`
    cursor: pointer;
`;


const imageDiv = css`
    display: flex;
    justify-content: center;
`;

const pokemonNameDiv = css`
    display: flex;
    justify-content: center;
`;

const spanDescription = css`
    font-size: 18px;
`;


export const PokemonDetailComponent: React.FC<Props> = (props) => {
    const { pokemon } = props
    const [url, setUrl] = React.useState<string>('');
    const navigate = useNavigate();

    React.useEffect(() => {
        if (pokemon)
            setUrl(
                `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`
            )
    }, [pokemon])

    return (
        pokemon && (
            <div css={detailBox}>
                <div css={closeIconDiv}>
                    <i css={closeIcon} onClick={() => navigate('/pokemon')}>X</i>
                </div>
                <div css={boxInfo}>
                    <div css={imageDiv}>
                        <img src={url} alt="" />
                    </div>
                    <div css={pokemonNameDiv}>{pokemon.name}</div>
                    <div><span css={spanDescription}>ID:</span> {pokemon.id}</div>
                    <div><span css={spanDescription}>Type:</span>  {pokemon.type}</div>
                    <div><span css={spanDescription}>Height:</span>  {pokemon.height}</div>
                    <div>
                    <span css={spanDescription}>Abilities:</span> 
                        <ul>
                            {pokemon.abilities.map((e) => (
                                <li key={e.ability.name}>{e.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    )
}
