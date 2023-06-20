import { useState } from "react";
import { ContainerHeader } from "../DeliveryInfo/ContainerHeader";
import { PaymentMethodButton } from "./PaymentMethodButton";
import { PaymentMethodContainer, PaymentTypeContainer } from "./styles";

const paymentMethods = [
    { icon: "CreditCard", paymentType: "creditCard", text: "Credit Card" },
    { icon: "Bank", paymentType: "debitCard", text: "Debit Card" },
    { icon: "Money", paymentType: "cash", text: "Cash" },
] as const;

type PaymentMethod = (typeof paymentMethods)[number]["paymentType"];
type PaymentIcon = (typeof paymentMethods)[number]["icon"];

export interface PaymentButtonProps {
    icon: PaymentIcon;
    paymentType?: PaymentMethod;
    text: string;
    onClick: () => void;
    isSelected: boolean;
}

export function PaymentType() {
    const [selectedPayment, setSelectedPayment] = useState("");

    console.log(selectedPayment);

    function handlePaymentMethodClick(paymentMethod: PaymentMethod) {
        setSelectedPayment(paymentMethod);
    }

    return (
        <PaymentTypeContainer>
            <ContainerHeader
                icon="CurrencyDollar"
                color="purple"
                title="Payment Method"
                description="The payment is made upon delivery. Choose the payment method you prefer."
            />

            <PaymentMethodContainer>
                {paymentMethods.map((payment) => (
                    <PaymentMethodButton
                        icon={payment.icon}
                        text={payment.text}
                        key={payment.paymentType}
                        onClick={() =>
                            handlePaymentMethodClick(payment.paymentType)
                        }
                        isSelected={selectedPayment === payment.paymentType}
                    />
                ))}
            </PaymentMethodContainer>
        </PaymentTypeContainer>
    );
}
