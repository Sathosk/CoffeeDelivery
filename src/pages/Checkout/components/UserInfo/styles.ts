import { styled } from "styled-components";
import { typographyStyles } from "../../../../styles/themes/Typography";

export const UserInfoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 40rem;

    h3 {
        ${typographyStyles.titleXS}
        color: ${props => props.theme["base-subtitle"]};
    }
`