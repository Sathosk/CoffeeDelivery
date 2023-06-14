import { DeliveryInfo } from "./DeliveryInfo";
import { PaymentType } from "./PaymentType";
import { UserInfoContainer } from "./styles";

export function UserInfo() {
    return (
        <UserInfoContainer>
            <h3>Complete your order</h3>
            <DeliveryInfo />
            <PaymentType />
        </UserInfoContainer>
    );
}
