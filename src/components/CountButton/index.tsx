import { Minus, Plus } from "phosphor-react";
import { AddRemoveButton, CountContainer } from "./style";

interface CountButtonProps {
    quantity: number;
    changeQuantity: (number: number) => void;
}

export function CountButton({ quantity, changeQuantity }: CountButtonProps) {
    function handleChangeQuantity(number: number) {
        changeQuantity(number);
    }

    return (
        <CountContainer>
            <AddRemoveButton
                onClick={() =>
                    quantity > 0 && handleChangeQuantity(quantity - 1)
                }
            >
                <Minus weight="bold" size={14} />
            </AddRemoveButton>
            <span>{quantity}</span>
            <AddRemoveButton onClick={() => handleChangeQuantity(quantity + 1)}>
                <Plus weight="bold" size={14} />
            </AddRemoveButton>
        </CountContainer>
    );
}
