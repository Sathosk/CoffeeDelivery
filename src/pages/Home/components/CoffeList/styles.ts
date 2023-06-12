import { styled } from "styled-components";
import { typographyStyles } from "../../../../styles/themes/Typography";

export const CoffeListContainer = styled.section`
    padding: 0 1rem;
`

export const CoffeeListWrapper = styled.section`

    h2 {
        ${typographyStyles.titleL}
        color: ${props => props.theme["base-subtitle"]};
        padding: 2rem 0 3.375rem 0;
    }
`;

export const CoffeeListContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, max-content));

    gap: 2.5rem 2rem;
    width: 100%;

    @media (max-width: 1200px) {
        justify-content: center;
    }
`;