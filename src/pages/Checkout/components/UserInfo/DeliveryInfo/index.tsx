import { MapPinLine } from "phosphor-react";
import {
    DeliveryAdressContainer,
    DeliveryAdressHeader,
    DeliveryAdressForm,
    DeliveryAdressInput,
} from "./styles";

export function DeliveryInfo() {
    return (
        <DeliveryAdressContainer>
            <DeliveryAdressHeader>
                <MapPinLine size={22} />

                <div>
                    <h4 className="heading">Delivery address</h4>
                    <p className="heading-description">
                        Please provide the address where you wish to receive
                        your order
                    </p>
                </div>
            </DeliveryAdressHeader>

            <DeliveryAdressForm>
                <DeliveryAdressInput
                    type="text"
                    placeholder="Zip Code"
                    style={{ gridArea: "zip" }}
                />

                <DeliveryAdressInput
                    type="text"
                    placeholder="Adress line"
                    style={{ gridArea: "address" }}
                />

                <DeliveryAdressInput
                    type="text"
                    placeholder="Number"
                    style={{ gridArea: "number" }}
                />

                <DeliveryAdressInput
                    className="optional"
                    type="text"
                    placeholder="Complement"
                    style={{ gridArea: "complement" }}
                />

                <DeliveryAdressInput
                    type="text"
                    placeholder="City"
                    style={{ gridArea: "city" }}
                />

                <DeliveryAdressInput
                    type="text"
                    placeholder="State/Province"
                    style={{ gridArea: "state" }}
                />

                <DeliveryAdressInput
                    type="text"
                    placeholder="UF"
                    style={{ gridArea: "uf" }}
                />
            </DeliveryAdressForm>
        </DeliveryAdressContainer>
    );
}
