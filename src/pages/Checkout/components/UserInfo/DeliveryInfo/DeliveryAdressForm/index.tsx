import { DeliveryAdressFormContainer, DeliveryAdressInput } from "./style";

export function DeliveryAdressForm() {
    return (
        <DeliveryAdressFormContainer>
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
        </DeliveryAdressFormContainer>
    );
}
