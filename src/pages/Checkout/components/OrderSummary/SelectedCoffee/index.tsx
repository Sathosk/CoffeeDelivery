import { useContext, useState } from "react";
import { CountButton } from "../../../../../components/CountButton";
import { CartContext } from "../../../../../contexts/CartContext";

import { Trash } from "phosphor-react";
import {
    CoffeCardController,
    CoffeeCardContainer,
    Price,
    RemoveButton,
} from "./styles";

interface SelectedCoffeeProps {
    name: string;
    imgName: string;
    price: number;
    quantity: number;
}

export function SelectedCoffee({
    name,
    imgName,
    price,
    quantity,
}: SelectedCoffeeProps) {
    const { isDevelopment } = useContext(CartContext);
    const [coffeeQuantity, setCoffeeQuantity] = useState<number>(quantity);

    const USDollar = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
    });

    function handleChangeQuantity(currentQuantity: number) {
        setCoffeeQuantity(currentQuantity);
    }

    return (
        <CoffeeCardContainer>
            <img
                src={
                    isDevelopment
                        ? `src/assets/CoffeeList/Type=${imgName}.svg`
                        : `../../../../../assets/CoffeeList/Type=${imgName}.svg`
                }
                alt=""
            />
            <CoffeCardController>
                <span>{name}</span>
                <div>
                    <CountButton
                        quantity={coffeeQuantity}
                        changeQuantity={handleChangeQuantity}
                        selectedCoffeName={name}
                    />
                    <RemoveButton>
                        <Trash size={16} />
                        <span>REMOVE</span>
                    </RemoveButton>
                </div>
            </CoffeCardController>

            <Price>
                <span>$ {USDollar.format(price * quantity)}</span>
            </Price>
        </CoffeeCardContainer>
    );
}
