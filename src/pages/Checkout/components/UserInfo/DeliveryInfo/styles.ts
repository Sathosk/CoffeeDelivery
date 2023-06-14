import { styled } from "styled-components";
import { typographyStyles } from "../../../../../styles/themes/Typography";
import { CheckoutContainerStyle } from "../../../../../styles/themes/CheckoutContainer";

export const DeliveryAdressContainer = styled.section`
    ${CheckoutContainerStyle}

    gap: 2rem;

    margin-top: 1rem;
`;

export const DeliveryAdressHeader = styled.header`
    display: flex;
    justify-content: flex-start;

    gap: 0.5rem;

    svg {
        color: ${propos => propos.theme["yellow-dark"]}
    }

    div {
        h4 {
            ${typographyStyles.textMReg}
            color: ${props => props.theme["base-subtitle"]};

            margin-bottom: 0.25rem;
        }

        p {
            ${typographyStyles.textS}
            color: ${props => props.theme["base-text"]}
        }
    }
`;

export const DeliveryAdressForm = styled.form`
    display: grid;
    grid-template-areas: 
        "zip . ."
        "address address address"
        "number complement complement" 
        "city state uf"
    ;
    grid-template-columns: 200px 276px 60px;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
`;

export const DeliveryAdressInput = styled.input`
    ${typographyStyles.textS}

    position: relative;
    padding: 0.75rem;

    color: ${props => props.theme["base-text"]};
    background-color: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;

    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }

    &:focus {
        outline: none;
        border-color: ${props => props.theme["yellow-dark"]};
    }
`