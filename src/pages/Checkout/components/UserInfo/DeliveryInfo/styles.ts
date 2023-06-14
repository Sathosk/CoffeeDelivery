import { styled } from "styled-components";
import { typographyStyles } from "../../../../../styles/themes/Typography";
import { CheckoutContainerStyle } from "../../../../../styles/themes/CheckoutContainer";

export const DeliveryAdressContainer = styled.section`
    ${CheckoutContainerStyle}

    margin-top: 1rem;
`;

export const CheckoutDeliveryInfo = styled.div`
    h3 {
        ${typographyStyles.titleXS}
        color: ${props => props.theme["base-subtitle"]};

        margin-bottom: 0.125rem;
    }
`;

export const CheckoutFormHeader = styled.header`
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