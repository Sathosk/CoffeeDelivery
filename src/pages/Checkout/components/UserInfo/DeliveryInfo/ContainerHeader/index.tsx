import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { DeliveryAdressHeader } from "./styles";

interface ContainerHeaderProps {
    icon: "MapinLine" | "CurrencyDollar";
    color: "yellow-dark" | "purple";
    title: string;
    description: string;
}

export function ContainerHeader({
    icon,
    color,
    title,
    description,
}: ContainerHeaderProps) {
    return (
        <DeliveryAdressHeader color={color}>
            {icon === "MapinLine" ? (
                <MapPinLine size={22} />
            ) : (
                <CurrencyDollar size={22} />
            )}

            <div>
                <h4 className="heading">{title}</h4>
                <p className="heading-description">{description}</p>
            </div>
        </DeliveryAdressHeader>
    );
}
