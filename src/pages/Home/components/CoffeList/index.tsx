import { CoffeeCard } from "./components/CoffeeCard";
import {
    CoffeListContainer,
    CoffeeListContent,
    CoffeeListWrapper,
} from "./styles";

export function CoffeList() {
    return (
        <CoffeListContainer>
            <CoffeeListWrapper className="container">
                <h2>Our Coffees</h2>
                <CoffeeListContent>
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                </CoffeeListContent>
            </CoffeeListWrapper>
        </CoffeListContainer>
    );
}
