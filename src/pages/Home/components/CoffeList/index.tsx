import { CoffeeCard } from "./CoffeeCard/index.js";
import { coffeeList } from "../../../../data/coffee.js";
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
                    {coffeeList.map((coffee) => {
                        return <CoffeeCard />;
                    })}
                </CoffeeListContent>
            </CoffeeListWrapper>
        </CoffeListContainer>
    );
}
