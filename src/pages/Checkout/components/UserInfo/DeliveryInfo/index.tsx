import { DeliveryAdressContainer } from "./styles";
import { ContainerHeader } from "./ContainerHeader";
import { DeliveryAdressForm } from "./DeliveryAdressForm";

export function DeliveryInfo() {
    return (
        <DeliveryAdressContainer>
            <ContainerHeader
                icon="MapinLine"
                color="yellow-dark"
                title="Delivery address"
                description="Please provide the address where you wish to receive your
                    order"
            />

            <DeliveryAdressForm />
        </DeliveryAdressContainer>
    );
}
