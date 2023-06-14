import { css } from "styled-components";

export const CheckoutContainerStyle = css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    background: ${props => props.theme["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`

