import { styled } from "styled-components";
import { typographyStyles } from "../../styles/themes/Typography";

export const CountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 4.5rem;
    height: 2.375rem;
    padding: 0 0.5rem;

    border-radius: 6px;

    background: ${props => props.theme["base-button"]};

    span {
        ${typographyStyles.textMReg}
        color: ${props => props.theme["base-title"]};
    }
`;

export const AddRemoveButton = styled.button`
    height: 16px;
    color: ${props => props.theme.purple};
    
    transition: color 0.2s ease;

    &:hover {
        color: ${props => props.theme["purple-dark"]};
    }
`;