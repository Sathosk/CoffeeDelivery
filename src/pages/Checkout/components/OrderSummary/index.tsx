import { SelectedCoffee } from "./SelectedCoffee";
import { OrderSummaryContainer, OrderSummarySection } from "./styles";

export function OrderSummary() {
    return (
        <OrderSummarySection>
            <h3>Selected Coffees</h3>
            <OrderSummaryContainer>
                <SelectedCoffee />
            </OrderSummaryContainer>
        </OrderSummarySection>
    );
}
