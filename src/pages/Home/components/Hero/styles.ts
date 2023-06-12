import { styled } from "styled-components";
import bgImg from "../../../../assets/Background.jpg";
import { typographyStyles } from "../../../../styles/themes/Typography";

export const HeroContainer = styled.section`
    background-image: url(${bgImg});
    background-size: cover;
`;

export const HeroContentWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 6.25rem 0;

    @media (max-width: 850px) {
        flex-direction: column-reverse;
        gap: 2rem;
        padding: 0;
    }
`;

export const HeroContentDesc = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 3rem;
    
    width: 36.75rem;

    @media (max-width: 850px) {
        text-align: center;
        align-items: center;
        width: 90%;
    }
`;

export const HeroContentImg = styled.div`
    display: flex;
    justify-content: flex-end;

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

export const HeroHeading = styled.div`
    h1 {
        ${typographyStyles.titleXL}
        margin-bottom: 1rem;
    }

    p {
        width: 90%;
        ${typographyStyles.textLReg}
    }
`;

export const HeroBulletPoint = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.25rem 0.4rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;