import {
    Cart,
    CartCount,
    HeaderContainer,
    HeaderNav,
    Location,
} from "./styles";
import logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderNav className="container">
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
                <Location>
                    <MapPin weight="fill" size={18} /> Porto Alegre, RS
                </Location>

                <NavLink to="/checkout">
                    <Cart>
                        <ShoppingCart weight="fill" size={20}></ShoppingCart>
                        <CartCount>
                            <span>3</span>
                        </CartCount>
                    </Cart>
                </NavLink>
            </HeaderNav>
        </HeaderContainer>
    );
}
