import { styled } from "styled-components";
import { typographyStyles } from "../../styles/themes/Typography";

export const CheckoutContainer = styled.section`
    display: flex;
    justify-content: space-between;

    gap: 2rem;

    width: 100%;
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
`;

export const EmptyCart = styled.span`
    ${typographyStyles.titleXS}
    color: ${props => props.theme.purple};
    width: 100%;
`;