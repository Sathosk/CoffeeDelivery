import { styled } from "styled-components";
import { typographyStyles } from "../../../../../../styles/themes/Typography";

export const PaymentButton = styled.button`
    all: unset;
    display: flex;
    justify-content: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    width: 100%;

    border-radius: 8px;
    background-color: ${props => props.theme["base-button"]};

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
`