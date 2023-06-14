import { styled } from "styled-components";
import { typographyStyles } from "../../../../../../styles/themes/Typography";

interface ContainerHeaderProps {
    color: 'yellow-dark' | 'purple';
}

export const DeliveryAdressHeader = styled.header<ContainerHeaderProps>`
    display: flex;
    justify-content: flex-start;

    gap: 0.5rem;

    svg {
        color: ${props => props.theme[props.color]};
    }

    div {
        h4 {
            ${typographyStyles.textMReg}
            color: ${props => props.theme["base-subtitle"]};

            margin-bottom: 0.25rem;
        }

        p {
            ${typographyStyles.textS}
            color: ${props => props.theme["base-text"]}
        }
    }
`;