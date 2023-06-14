import { ContainerHeader } from "../DeliveryInfo/ContainerHeader";
import { PaymentMethodButton } from "./PaymentMethodButton";
import { PaymentMethodContainer, PaymentTypeContainer } from "./styles";

export function PaymentType() {
    return (
        <PaymentTypeContainer>
            <ContainerHeader
                icon="CurrencyDollar"
                color="purple"
                title="Payment Method"
                description="The payment is made upon delivery. Choose the payment method you prefer."
            />

            <PaymentMethodContainer>
                <PaymentMethodButton
                    icon="CreditCard"
                    paymentMethod="creditCard"
                />
                <PaymentMethodButton icon="Bank" paymentMethod="debitCard" />
                <PaymentMethodButton icon="Money" paymentMethod="cash" />
            </PaymentMethodContainer>
        </PaymentTypeContainer>
    );
}
