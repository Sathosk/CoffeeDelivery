import { styled, DefaultTheme } from "styled-components";
import { typographyStyles } from "../../styles/themes/Typography";

interface ThemeProps {
    theme: DefaultTheme;
    color: keyof DefaultTheme;
}

export const List = styled.li<ThemeProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width:  2rem;
        height: 2rem;

        border-radius: 50%;

        color: ${props => props.theme.white};
        background: ${props => props.theme[props.color]};
    }
    
    span {
        ${typographyStyles.textMReg}
    }
    
`;