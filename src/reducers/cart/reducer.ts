import { ActionType, ActionTypes } from "./actions";

export interface CoffeeType {
    name: string;
    price: string;
    imgName: string;
    quantity: number;
}

export function cartReducer(state: CoffeeType[], action: ActionType) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFEE:
            return {
                ...state,
                cart: [...state, action.payload.newCoffee],
            }

        // case ActionTypes.UPDATE_CART:
        //     return {
        //         ...state,
        //         cart: [...state, action.payload.newCoffee],
        //     }

        // case ActionTypes.REMOVE_FROM_CART:
        //     return {
        //         ...state,
        //         cart: [...state, action.payload.newCoffee],
        //     }


        default:
            break;
    }
}