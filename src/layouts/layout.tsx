import React from "react";
import { css } from "@emotion/react";

interface Props {
    children: React.ReactNode;
}

const containerClass = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 30px;
    `;

export const LayoutComponent: React.FC<Props> = (props) => {

    return(
        <div css={containerClass}>
            {props.children}
        </div>
    )
}