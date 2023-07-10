import { ActionType, ActionTypes } from "./actions";

interface CartStateType {
    cart: CoffeeType[];
}

export interface CoffeeType {
    name: string;
    price: string;
    imgName: string;
    quantity: number;
}

export function cartReducer(state: CartStateType, action: ActionType) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFEE: {
            const isCoffeeInCart = state.cart.some(coffee => coffee.name === action.payload.newCoffee.name);

            if (isCoffeeInCart) {
                return {
                    cart: state.cart.map(coffee => {
                        if (coffee.name === action.payload.newCoffee.name) {
                            console.log(`updating ${action.payload.newCoffee.name} quantity in cart`);
                            return { ...coffee, quantity: coffee.quantity + action.payload.newCoffee.quantity };
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

        // case ActionTypes.UPDATE_CART:
        //     return {
        //         cart: 
        //     }

        // case ActionTypes.REMOVE_FROM_CART:
        //     return {
        //         ...state,
        //         cart: [...state, action.payload.newCoffee],
        //     }


        default:
            return state;
    }
}