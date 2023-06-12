import { styled } from "styled-components";
import { typographyStyles } from "../../styles/themes/Typography";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.5rem;
    padding: 2rem 0;
`

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;

`;

export const Location = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    width: 9rem;
    height: 2.375rem;
    gap: 0.25rem;

    color: ${props => props.theme["purple-dark"]};
    ${typographyStyles.textS};

    border-radius: 8px;
    background: ${props => props.theme["purple-light"]};

    svg {
        color: ${props => props.theme.purple};
        width: 22px;
        height: 22px;
    }

    &:hover {
        opacity: 0.7;
    }
`;

export const Cart = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
    color: ${props => props.theme["yellow-dark"]};

    border-radius: 8px;
    background-color: ${props => props.theme["yellow-light"]};

    &:hover {
        opacity: 0.7;
    }
`;

export const CartCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;

    position: absolute;
    bottom: 26px;
    right: -8px;

    border-radius: 50%;
    ${typographyStyles.textXS}

    color: ${props => props.theme.white};
    background-color: ${props => props.theme["yellow-dark"]};

`;
