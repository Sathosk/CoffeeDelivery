import { CoffeList } from "./components/CoffeList";
import { HeroSection } from "./components/Hero";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <HeroSection />
            <CoffeList />
        </HomeContainer>
    );
}
