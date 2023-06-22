import { CoffeCardController, CoffeeCardContainer, Price } from "./styles";
import exampleImg from "../../../../../assets/CoffeeList/Type=Expresso.svg";
import { CountButton } from "../../../../../components/CountButton";

export function SelectedCoffee() {
    return (
        <CoffeeCardContainer>
            <img src={exampleImg} alt="" />
            <CoffeCardController>
                <CountButton />
            </CoffeCardController>

            <Price>
                <span></span>
            </Price>
        </CoffeeCardContainer>
    );
}
