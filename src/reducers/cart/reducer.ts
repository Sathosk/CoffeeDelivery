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
        case ActionTypes.ADD_NEW_COFFEE:
            return {
                cart: [...state.cart, action.payload.newCoffee],
            }

        case ActionTypes.UPDATE_CART:
            return {
                cart: state.cart.map(coffee => {
                    if (coffee.name === action.payload.currentCoffee) {
                        console.log('updating')
                        return { ...coffee, quantity: coffee.quantity + action.payload.quantity };
                    } else {
                        return coffee;
                    }
                }),
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