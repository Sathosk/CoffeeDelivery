import { styled } from "styled-components";
import { typographyStyles } from "../../../../styles/themes/Typography";

export const CoffeListContainer = styled.section`

`

export const CoffeeListWrapper = styled.section`
    

    h2 {
        ${typographyStyles.titleL}
        color: ${props => props.theme["base-subtitle"]};
        padding: 2rem 0 3.375rem 0;
    }
`;

export const CoffeeListContent = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`;