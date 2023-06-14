import {
    AddCartButton,
    CardFooter,
    CoffeeCardContainer,
    CoffeeCardContent,
    Price,
    TagsContainer,
} from "./style";
import svg from "../../../../../assets/CoffeeList/Type=Expresso.svg";
import { Tag } from "../CoffeeTag";
import { CountButton } from "../../../../../components/CountButton";
import { ShoppingCartSimple } from "phosphor-react";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <CoffeeCardContent>
                <img src={svg} alt="" />
                <TagsContainer>
                    <Tag />
                    <Tag />
                </TagsContainer>

                <h4>Expresso Tradicional</h4>
                <p className="description">
                    O tradicional café feito com água quente e grãos moídos
                </p>

                <CardFooter>
                    <Price>
                        <span>R$</span>
                        9,90
                    </Price>
                    <CountButton />
                    <AddCartButton>
                        <ShoppingCartSimple weight="fill" size={21} />
                    </AddCartButton>
                </CardFooter>
            </CoffeeCardContent>
        </CoffeeCardContainer>
    );
}
