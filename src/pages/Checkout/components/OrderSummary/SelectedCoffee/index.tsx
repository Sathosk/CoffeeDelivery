import {
    CoffeCardController,
    CoffeeCardContainer,
    Price,
    RemoveButton,
} from "./styles";
import exampleImg from "../../../../../assets/CoffeeList/Type=Expresso.svg";
import { CountButton } from "../../../../../components/CountButton";
import { Trash } from "phosphor-react";

export function SelectedCoffee() {
    return (
        <CoffeeCardContainer>
            <img src={exampleImg} alt="" />
            <CoffeCardController>
                <span>Expresso Tradicional</span>
                <CountButton />
                <RemoveButton>
                    <Trash size={16} />
                    <span>REMOVE</span>
                </RemoveButton>
            </CoffeCardController>

            <Price>
                <span>$ 9,90</span>
            </Price>
        </CoffeeCardContainer>
    );
}
