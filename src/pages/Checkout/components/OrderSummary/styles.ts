import { styled } from "styled-components";
import { CheckoutContainerStyle } from "../../../../styles/themes/CheckoutContainer";
import { typographyStyles } from "../../../../styles/themes/Typography";

export const OrderSummarySection = styled.section`
    width: 100%;

    h3 {
        ${typographyStyles.titleXS}
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const OrderSummaryContainer = styled.div`
    ${CheckoutContainerStyle}

    margin-top: 1rem;
`;