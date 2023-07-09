import { useEffect, useContext } from "react";
import { CoffeList } from "./components/CoffeList";
import { HeroSection } from "./components/Hero";
import { HomeContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";

export function Home() {
    return (
        <HomeContainer>
            <HeroSection />
            <CoffeList />
        </HomeContainer>
    );
}
