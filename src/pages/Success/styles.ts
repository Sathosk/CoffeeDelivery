import { styled } from "styled-components";
import { typographyStyles } from "../../styles/themes/Typography";

export const SuccessContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    gap: 2rem;

    width: 100%;
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;

`

export const OrderInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 32.87rem;
    
    
    h2 {
        ${typographyStyles.titleL}
        color: ${props => props.theme["yellow-dark"]};
    }

    span {
        ${typographyStyles.textMReg}
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const Illustration = styled.section`

`;