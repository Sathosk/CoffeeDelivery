import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { List } from "./style";

interface ListIconProps {
    icon: "Coffee" | "Package" | "ShoppingCart" | "Timer";
    color: "yellow-dark" | "purple" | "yellow" | "base-text";
    text: string;
}

export function ListIcon({ icon, color, text }: ListIconProps) {
    let IconComponent;

    switch (icon) {
        case "Coffee":
            IconComponent = Coffee;
            break;
        case "Package":
            IconComponent = Package;
            break;
        case "ShoppingCart":
            IconComponent = ShoppingCart;
            break;
        case "Timer":
            IconComponent = Timer;
            break;
    }

    return (
        <List color={color}>
            <div>
                <IconComponent weight="fill" color="white" />
            </div>
            <span>{text}</span>
        </List>
    );
}
