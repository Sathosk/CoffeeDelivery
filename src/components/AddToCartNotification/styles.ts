import { styled } from "styled-components";
import { typographyStyles } from "../../styles/themes/Typography";

export const NotificationContainer = styled.div`
    ${typographyStyles.textXS}
    color: ${props => props.theme["purple-dark"]};

    background-color: ${props => props.theme["purple-light"]};

    border: 1px solid ${props => props.theme["purple-dark"]};

    padding: 0.5rem 0.8rem;
    border-radius: 6px;
`;