import {
    Cart,
    CartCount,
    HeaderContainer,
    HeaderNav,
    Location,
} from "./styles";
import logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderNav className="container">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
                <Location>
                    <MapPin weight="fill" size={18} /> Porto Alegre, RS
                </Location>
                <Cart>
                    <ShoppingCart weight="fill" size={20}></ShoppingCart>
                    <CartCount>3</CartCount>
                </Cart>
            </HeaderNav>
        </HeaderContainer>
    );
}
