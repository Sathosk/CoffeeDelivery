import { ReactNode, createContext, useReducer } from "react";
import { CoffeeType, cartReducer } from "../reducers/cart/reducer";
import { addNewCoffeeAction, updateCartAction } from "../reducers/cart/actions";

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartContextType {
    cart: CoffeeType[];
    createNewCoffee: (coffee: CoffeeType) => void;
    updateCoffeeQuantity: (coffeeName: string) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
    });

    const { cart } = cartState;

    function createNewCoffee(coffee: CoffeeType) {
        dispatch(addNewCoffeeAction(coffee));
    }

    function updateCoffeeQuantity(coffeeName: string) {
        dispatch(updateCartAction());
    }

    return (
        <CartContext.Provider
            value={{ cart, createNewCoffee, updateCoffeeQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
}
