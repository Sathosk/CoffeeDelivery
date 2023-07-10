import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { UserInfo } from "./components/UserInfo";
import { OrderSummary } from "./components/OrderSummary";

import { CheckoutContainer, EmptyCart } from "./styles";

export function Checkout() {
    const { productsInCart } = useContext(CartContext);

    return (
        <CheckoutContainer className="container">
            <UserInfo />

            {productsInCart ? (
                <OrderSummary />
            ) : (
                <EmptyCart>The cart is empty.</EmptyCart>
            )}
        </CheckoutContainer>
    );
}
