import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentButton } from "./styles";
import { PaymentButtonProps } from "..";

export function PaymentMethodButton({
    icon,
    text,
    onClick,
    isSelected,
}: PaymentButtonProps) {
    let IconComponent;

    switch (icon) {
        case "CreditCard":
            IconComponent = CreditCard;
            break;
        case "Bank":
            IconComponent = Bank;
            break;
        case "Money":
            IconComponent = Money;
            break;
    }

    return (
        <>
            <PaymentButton onClick={onClick} $active={isSelected}>
                <IconComponent size={16} />
                <span>{text.toUpperCase()}</span>
            </PaymentButton>
        </>
    );
}
