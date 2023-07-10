import { ActionType, ActionTypes } from "./actions";

interface CartStateType {
    cart: CoffeeType[];
}

export interface CoffeeType {
    name: string;
    price: number;
    imgName: string;
    quantity: number;
    totalPrice: number;
}

export function cartReducer(state: CartStateType, action: ActionType) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFEE: {
            const isCoffeeInCart = state.cart.some(coffee => coffee.name === action.payload.newCoffee.name);

            if (isCoffeeInCart) {
                return {
                    cart: state.cart.map(coffee => {
                        if (coffee.name === action.payload.newCoffee.name) {
                            const updatedQuantity = coffee.quantity + action.payload.newCoffee.quantity;

                            return { ...coffee, quantity: updatedQuantity, totalPrice: coffee.price * updatedQuantity };
                        } else {
                            return coffee;
                        }
                    }),
                }
            }

            return {
                cart: [...state.cart, action.payload.newCoffee],
            }
        }

        case ActionTypes.UPDATE_CART:
            return {
                cart: state.cart.map(coffee => {
                    if (coffee.name === action.payload.currentCoffee) {
                        return { ...coffee, quantity: action.payload.quantity, totalPrice: coffee.price * action.payload.quantity }
                    } else {
                        return coffee;
                    }
                })
            }

        // case ActionTypes.REMOVE_FROM_CART:
        //     return {
        //         ...state,
        //         cart: [...state, action.payload.newCoffee],
        //     }


        default:
            return state;
    }
}