import { useContext } from "react";
import { Minus, Plus } from "phosphor-react";
import { AddRemoveButton, CountContainer } from "./style";
import { CartContext } from "../../contexts/CartContext";

interface CountButtonProps {
    quantity: number;
    selectedCoffeName?: string;
    changeQuantity: (number: number) => void;
}

export function CountButton({
    quantity,
    selectedCoffeName,
    changeQuantity,
}: CountButtonProps) {
    const { updateCoffeeQuantity, deleteCoffeeFromCart } =
        useContext(CartContext);

    function handleChangeQuantity(number: number, selectedCoffeName?: string) {
        changeQuantity(number);

        if (selectedCoffeName && number < 1)
            deleteCoffeeFromCart(selectedCoffeName);
        else if (selectedCoffeName)
            updateCoffeeQuantity(selectedCoffeName, number);
    }

    return (
        <CountContainer>
            <AddRemoveButton
                onClick={() =>
                    quantity > 0 &&
                    handleChangeQuantity(quantity - 1, selectedCoffeName)
                }
            >
                <Minus weight="bold" size={14} />
            </AddRemoveButton>

            <span>{quantity}</span>

            <AddRemoveButton
                onClick={() =>
                    handleChangeQuantity(quantity + 1, selectedCoffeName)
                }
            >
                <Plus weight="bold" size={14} />
            </AddRemoveButton>
        </CountContainer>
    );
}
