import { UserInfo } from "./components/UserInfo";
import { OrderSummary } from "./components/OrderSummary";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer className="container">
            <UserInfo />
            <OrderSummary />
        </CheckoutContainer>
    );
}
