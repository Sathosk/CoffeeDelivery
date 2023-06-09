import { styled } from "styled-components";
import { typographyStyles } from "../../../../../styles/themes/Typography";

export const CoffeeCardContainer = styled.li`
    position: relative;
    display: flex;
    justify-content: flex-start;

    gap: 1.25rem;

    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};

    img {
        width: 4rem;
    }
`;

export const CoffeCardController = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    span {
        ${typographyStyles.textMReg}
        color: ${props => props.theme["base-subtitle"]};
        grid-column: 1 / span 2;
    }

    div {
        display: flex;
        justify-content: flex-start;

        gap: 0.5rem;
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;

    border-radius: 6px;

    background: ${props => props.theme["base-button"]};

    &:hover {
        background-color: ${props => props.theme["base-hover"]};

        svg {
            color: ${props => props.theme["purple-dark"]};
        }

        span {
            color: ${props => props.theme["base-subtitle"]};
        }
    }

    span {
        ${typographyStyles.buttonM}
        color: ${props => props.theme["base-text"]};
    }

    svg {
        color: ${props => props.theme.purple};
    }
`;

export const Price = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;

    ${typographyStyles.textMBold}
    color: ${props => props.theme["base-text"]};
`;