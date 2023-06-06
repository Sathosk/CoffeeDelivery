import { HeroSection } from "./components/Hero";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <main>
            <HomeContainer>
                <HeroSection></HeroSection>
            </HomeContainer>
        </main>
    );
}
