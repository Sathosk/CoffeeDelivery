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
                        return (
                            <CoffeeCard
                                key={coffee.name}
                                name={coffee.name}
                                description={coffee.description}
                                price={coffee.price}
                                tags={coffee.tags}
                                imgName={coffee.imgName}
                            />
                        );
                    })}
                </CoffeeListContent>
            </CoffeeListWrapper>
        </CoffeListContainer>
    );
}
