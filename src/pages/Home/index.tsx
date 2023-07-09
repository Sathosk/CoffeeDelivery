import { useEffect, useContext } from "react";
import { CoffeList } from "./components/CoffeList";
import { HeroSection } from "./components/Hero";
import { HomeContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";

export function Home() {
    const { cart, createNewCoffee, updateCoffeeQuantity } =
        useContext(CartContext);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <HomeContainer>
            <HeroSection />
            <CoffeList />
        </HomeContainer>
    );
}
