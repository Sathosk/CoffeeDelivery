import { OrderInfo, Illustration, SuccessContainer } from "./styles";
import illustration from "../../assets/illustration.jpg";
import { SuccessDeliveryInfo } from "./SuccessDeliveryInfo";

export function Success() {
    return (
        <SuccessContainer className="container">
            <OrderInfo>
                <h2>Yay! Order confirmed.</h2>
                <span>Now, just wait, and soon the coffee will reach you.</span>
                <SuccessDeliveryInfo />
            </OrderInfo>

            <Illustration>
                <img src={illustration} alt="" />
            </Illustration>
        </SuccessContainer>
    );
}
