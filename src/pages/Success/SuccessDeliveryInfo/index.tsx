import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DeliveryInfoContainer, Info, InfoIcon, InfoText } from "./styles";

export function SuccessDeliveryInfo() {
    return (
        <DeliveryInfoContainer>
            <Info>
                <InfoIcon color="purple">
                    <MapPin size={16} weight="fill" />
                </InfoIcon>
                <InfoText>
                    <span>
                        Delivery on <b>Goes address, 122</b>
                    </span>
                    <span>Farrapos - Porto Alegre, RS</span>
                </InfoText>
            </Info>

            <Info>
                <InfoIcon color="yellow">
                    <Timer size={16} weight="fill" />
                </InfoIcon>
                <InfoText>
                    <span>Estimated delivery</span>
                    <span>
                        <b>20 min - 30 min</b>
                    </span>
                </InfoText>
            </Info>

            <Info>
                <InfoIcon color="yellow-dark">
                    <CurrencyDollar size={16} weight="fill" />
                </InfoIcon>
                <InfoText>
                    <span>Payment Method</span>
                    <span>
                        <b>Credit Card</b>
                    </span>
                </InfoText>
            </Info>
        </DeliveryInfoContainer>
    );
}
