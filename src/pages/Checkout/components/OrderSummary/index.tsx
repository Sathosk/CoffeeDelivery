import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { SelectedCoffee } from "./SelectedCoffee";
import {
    OrderButton,
    OrderSummaryContainer,
    OrderSummarySection,
    PriceItem,
    PriceSummary,
    PriceTotal,
} from "./styles";
import { USDollar } from "../../../../utils/priceFormatter";

export function OrderSummary() {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((prev, curr) => prev + curr.totalPrice, 0);
    const deliveryFee = 3.5;

    return (
        <OrderSummarySection>
            <h3>Selected Coffees</h3>
            <OrderSummaryContainer>
                {cart.map((coffee) => (
                    <SelectedCoffee
                        key={coffee.name}
                        name={coffee.name}
                        imgName={coffee.imgName}
                        price={coffee.price}
                        quantity={coffee.quantity}
                    />
                ))}

                <PriceSummary>
                    <PriceItem>
                        <span>Item Total</span>
                        <span>$ {USDollar.format(totalItems)}</span>
                    </PriceItem>
                    <PriceItem>
                        <span>Delivery</span>
                        <span>$ {USDollar.format(deliveryFee)}</span>
                    </PriceItem>
                    <PriceTotal>
                        <span>Total</span>
                        <span>
                            $ {USDollar.format(totalItems + deliveryFee)}
                        </span>
                    </PriceTotal>
                </PriceSummary>
                <OrderButton>FINISH ORDER</OrderButton>
            </OrderSummaryContainer>
        </OrderSummarySection>
    );
}
