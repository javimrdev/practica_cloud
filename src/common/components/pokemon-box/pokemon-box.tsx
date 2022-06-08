import { css } from "@emotion/react";
import { routes } from "core/router/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    id: string;
    name: string;
}

const box = css`
    width: 180px;
    height: 180px;
    border: black solid 1px;
    border-radius: 3px;
    background-color: whitesmoke;
    

    :hover {
        background-color: gray;
    }

`;

const boxImage = css`
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const boxName = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokemonBoxComponent: React.FC<Props> = (props) => {

    const { name } = props;
    const url: string = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;
    const navigate = useNavigate();

    return (
            <div css={box} onClick={() => navigate(routes.detail(name))}>
                <div css={boxImage}>
                    <div>
                        <img src={url} alt="" />
                    </div>
                </div>
                <div css={boxName}>{name}</div>
            </div>
    )
}