import { ReactNode } from "react";
import { NotificationContainer } from "./styles";

interface AddToCartNotProps {
    children: ReactNode;
}

export function AddToCartNotification({ children }: AddToCartNotProps) {
    return <NotificationContainer>{children}</NotificationContainer>;
}
