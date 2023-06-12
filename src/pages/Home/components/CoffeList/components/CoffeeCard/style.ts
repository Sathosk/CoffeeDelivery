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

    img {
        width: 7.5rem;
    }

    h4 {
        ${typographyStyles.titleS}
        color: ${props => props.theme["base-subtitle"]};
    }
    
    .description {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        text-align: center;
        ${typographyStyles.textS}
        color: ${props => props.theme["base-label"]};
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.25rem;
`;

export const CardFooter = styled.footer`
    display: flex;
`;

export const Price = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-right: 1.5rem;
    padding-left: 1.1rem;

    ${typographyStyles.titleM}
    color: ${props => props.theme["base-text"]};
    
    span{
        position: absolute;
        bottom: 0.52rem;
        left: -0.1rem;
        ${typographyStyles.textS}
    }
`

export const AddCartButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
    margin-left: 0.5rem;

    background: ${props => props.theme["purple-dark"]};
    color: ${props => props.theme["base-card"]};
    border-radius: 6px;

    transition: background 0.3s ease;

    &:hover {
        background: ${props => props.theme.purple}
    }
`;

