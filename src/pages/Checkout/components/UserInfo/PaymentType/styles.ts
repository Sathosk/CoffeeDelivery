import { styled } from "styled-components";
import { CheckoutContainerStyle } from "../../../../../styles/themes/CheckoutContainer";

export const PaymentTypeContainer = styled.section`
    ${CheckoutContainerStyle}
    gap: 2rem;

    margin-top: 0.75rem;
`;

export const PaymentMethodContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
`;