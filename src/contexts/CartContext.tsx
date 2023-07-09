import { ReactNode, createContext, useReducer } from "react";
import { CoffeeType, cartReducer } from "../reducers/cart/reducer";
import { addNewCoffeeAction, updateCartAction } from "../reducers/cart/actions";

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartContextType {
    isDevelopment: boolean;
    cart: CoffeeType[];
    createNewCoffee: (coffee: CoffeeType) => void;
    updateCoffeeQuantity: (coffeeName: string, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
    });

    console.log(cartState);

    const isDevelopment = process.env.NODE_ENV === "development";

    const { cart } = cartState;

    function createNewCoffee(coffee: CoffeeType) {
        dispatch(addNewCoffeeAction(coffee));
    }

    function updateCoffeeQuantity(coffeeName: string, quantity: number) {
        dispatch(updateCartAction(coffeeName, quantity));
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                isDevelopment,
                createNewCoffee,
                updateCoffeeQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
