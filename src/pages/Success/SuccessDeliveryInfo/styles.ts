import { styled } from "styled-components";
import { typographyStyles } from "../../../styles/themes/Typography";

interface InfoIconProps {
    color: 'purple' | 'yellow' | 'yellow-dark';
}

export const DeliveryInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 2rem;
    padding: 2.5rem;
    margin-top: 2.5rem;

    background: linear-gradient(white, white) padding-box,
                linear-gradient(to right, ${props => props.theme["yellow"]}, ${props => props.theme.purple}) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
`;

export const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
`;

export const InfoIcon = styled.div<InfoIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: ${props => props.theme[props.color]};
    border-radius: 50%;

    svg {
        color: ${props => props.theme.white};
    }
`;

export const InfoText = styled.div`
    display: flex;
    flex-direction: column;

    span {
        ${typographyStyles.textMReg}
        color: ${props => props.theme["base-subtitle"]};
    }
`;