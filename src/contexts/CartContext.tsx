import {
    ReactNode,
    createContext,
    useReducer,
    useState,
    useEffect,
} from "react";
import { CoffeeType, cartReducer } from "../reducers/cart/reducer";
import {
    addNewCoffeeAction,
    updateCartAction,
    removeFromCartAction,
} from "../reducers/cart/actions";

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartContextType {
    isDevelopment: boolean;
    cart: CoffeeType[];
    productsInCart: number;
    addToCartNotifications: string[];
    createNewCoffee: (coffee: CoffeeType) => void;
    updateCoffeeQuantity: (coffeeName: string, quantity: number) => void;
    deleteCoffeeFromCart: (coffeeName: string) => void;
    displayNotification: (name: string) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
    });

    const [addToCartNotifications, setAddToCartNotification] = useState<
        string[]
    >([]);

    console.log(addToCartNotifications);

    const isDevelopment = process.env.NODE_ENV === "development";

    // Removing toast after a set
    useEffect(() => {
        if (addToCartNotifications.length > 0) {
            const timer = setTimeout(
                () => {
                    setAddToCartNotification((notifications) =>
                        notifications.slice(1)
                    );
                },
                addToCartNotifications.length === 1 ? 2000 : 1000
            );

            return () => clearTimeout(timer);
        }
    }, [addToCartNotifications]);

    const { cart } = cartState;

    const productsInCart = cart.length;

    function displayNotification(name: string) {
        const newNotification = `${name} added to cart.`;
        setAddToCartNotification((notifications) => [
            ...notifications,
            newNotification,
        ]);
    }

    function createNewCoffee(coffee: CoffeeType) {
        dispatch(addNewCoffeeAction(coffee));
    }

    function updateCoffeeQuantity(coffeeName: string, quantity: number) {
        dispatch(updateCartAction(coffeeName, quantity));
    }

    function deleteCoffeeFromCart(coffeeName: string) {
        dispatch(removeFromCartAction(coffeeName));
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                isDevelopment,
                productsInCart,
                addToCartNotifications,
                createNewCoffee,
                updateCoffeeQuantity,
                deleteCoffeeFromCart,
                displayNotification,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
