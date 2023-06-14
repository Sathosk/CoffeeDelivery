import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentButton } from "./styles";

interface PaymentButtonProps {
    icon: "CreditCard" | "Bank" | "Money";
    paymentMethod: "creditCard" | "debitCard" | "cash";
}

export function PaymentMethodButton({
    icon,
    paymentMethod,
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
            <PaymentButton>
                <IconComponent size={16} />
                <span>{paymentMethod.toUpperCase()}</span>
            </PaymentButton>
        </>
    );
}
