import { styled } from "styled-components";
import { typographyStyles } from "../../../../../../styles/themes/Typography";

interface PaymentButtonProps {
    active: boolean;
}

export const PaymentButton = styled.button<PaymentButtonProps>`
    all: unset;
    display: flex;
    justify-content: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    width: 100%;

    border-radius: 8px;
    background-color: ${props => props.theme["base-button"]};

    cursor: pointer;

    svg {
        color: ${props => props.theme.purple};
    }

    span {
        ${typographyStyles.buttonM}
        color: ${props => props.theme["base-text"]};
    }

    &:hover {
        background-color: ${props => props.theme["base-hover"]};
    }

    ${props => props.active && `
        border: 1px solid ${props.theme.purple};
        background-color: ${props.theme["purple-light"]};

        &:hover {
            background-color: none;
        }
    `}
`