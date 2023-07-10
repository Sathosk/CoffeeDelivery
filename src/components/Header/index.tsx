import { useContext } from "react";
import logo from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

import {
    Cart,
    CartCount,
    HeaderContainer,
    HeaderNav,
    Location,
} from "./styles";

export function Header() {
    const { productsInCart } = useContext(CartContext);

    return (
        <HeaderContainer>
            <HeaderNav className="container">
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
                <Location>
                    <MapPin weight="fill" size={18} /> São Paulo, SP
                </Location>

                <NavLink to="/checkout">
                    <Cart>
                        <ShoppingCart weight="fill" size={20}></ShoppingCart>
                        <CartCount>
                            <span>{productsInCart}</span>
                        </CartCount>
                    </Cart>
                </NavLink>
            </HeaderNav>
        </HeaderContainer>
    );
}
