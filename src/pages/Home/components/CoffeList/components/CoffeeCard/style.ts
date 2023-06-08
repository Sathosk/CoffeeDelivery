import { styled } from "styled-components";
import { typographyStyles } from "../../../../../../styles/themes/Typography";

export const CoffeeCardContainer = styled.div`
    width: 16rem;
    height: 19.375rem;

    padding: 0rem 1.5rem 1.5rem;

    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;

    flex-direction: column;
`;

export const CoffeeCardContent = styled.div`
    margin-top: -1.5rem;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    h4 {
        ${typographyStyles.titleS}
        color: ${props => props.theme["base-subtitle"]};
    }
`;

export const Tag = styled.span`

`;