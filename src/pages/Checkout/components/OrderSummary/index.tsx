import { SelectedCoffee } from "./SelectedCoffee";
import {
    OrderButton,
    OrderSummaryContainer,
    OrderSummarySection,
    PriceItem,
    PriceSummary,
    PriceTotal,
} from "./styles";

export function OrderSummary() {
    return (
        <OrderSummarySection>
            <h3>Selected Coffees</h3>
            <OrderSummaryContainer>
                <SelectedCoffee />
                <SelectedCoffee />
                <PriceSummary>
                    <PriceItem>
                        <span>Item Total</span>
                        <span>R$ 29,70</span>
                    </PriceItem>
                    <PriceItem>
                        <span>Delivery</span>
                        <span>R$ 3,50</span>
                    </PriceItem>
                    <PriceTotal>
                        <span>Total</span>
                        <span>R$ 33,20</span>
                    </PriceTotal>
                </PriceSummary>
                <OrderButton>FINISH ORDER</OrderButton>
            </OrderSummaryContainer>
        </OrderSummarySection>
    );
}
