import { styled } from "styled-components";
import { typographyStyles } from "../../../../styles/themes/Typography";

export const UserInfoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h3 {
        ${typographyStyles.titleXS}
        color: ${props => props.theme["base-subtitle"]};

        &::placeholder {
            ${typographyStyles.textS}
            color: ${props => props.theme["base-label"]};
        }
    }
`