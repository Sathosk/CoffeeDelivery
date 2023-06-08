import { CoffeeCardContainer, CoffeeCardContent } from "./style";
import svg from "../../../../../../assets/CoffeeList/Type=Expresso.svg";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <CoffeeCardContent>
                <img src={svg} alt="" />
                <h4>Expresso Tradicional</h4>
            </CoffeeCardContent>
        </CoffeeCardContainer>
    );
}
