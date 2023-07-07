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
    border-radius: 6px 44px;

    margin-top: 1rem;
`;

export const PriceSummary = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    gap: 0.84rem;
`;

export const PriceItem = styled.div`
    display: flex;
    justify-content: space-between;

    ${typographyStyles.textS}
    color: ${props => props.theme["base-text"]};
`;

export const PriceTotal = styled.div`
    display: flex;
    justify-content: space-between;

    ${typographyStyles.textLBold}
    color: ${props => props.theme["base-subtitle"]};
`

export const OrderButton = styled.button`
    text-align: center;
    ${typographyStyles.buttonL}
    color: ${props => props.theme.white};

    margin-top: 1.5rem;
    padding: 0.75rem;
    border-radius: 6px;

    background-color: ${props => props.theme["yellow"]};

    &:hover {
        background-color: ${props => props.theme["yellow-dark"]};
    }
`;