import { MapPinLine } from "phosphor-react";
import {
    CheckoutFormHeader,
    DeliveryAdress,
    DeliveryAdressContainer,
} from "./styles";

export function DeliveryInfo() {
    return (
        <DeliveryAdressContainer>
            <DeliveryAdress>
                <CheckoutFormHeader>
                    <MapPinLine size={22} />

                    <div>
                        <h4 className="heading">Delivery address</h4>
                        <p className="heading-description">
                            Please provide the address where you wish to receive
                            your order
                        </p>
                    </div>
                </CheckoutFormHeader>
            </DeliveryAdress>
        </DeliveryAdressContainer>
    );
}
