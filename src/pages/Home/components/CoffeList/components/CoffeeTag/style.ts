import { styled } from "styled-components";
import { typographyStyles } from "../../../../../../styles/themes/Typography";

export const TagContainer = styled.span`
    ${typographyStyles.tag}
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};

    border-radius: 100px;

    padding: 4px 8px;
    margin: 0.75rem 0 1rem 0
`;