import { CoffeeType } from "./reducer";

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    UPDATE_CART = 'UPDATE_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

interface AddCoffeCart {
    type: ActionTypes.ADD_NEW_COFFEE;
    payload: {
        newCoffee: CoffeeType;
    };
}

interface UpdateCart {
    type: ActionTypes.UPDATE_CART;
}

interface RemoveFromCart {
    type: ActionTypes.REMOVE_FROM_CART;
}

export type ActionType =
    | AddCoffeCart
    | UpdateCart
    | RemoveFromCart;

export function addNewCoffeeAction(newCoffee: CoffeeType) {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            newCoffee,
        }
    }
}

export function updateCartAction(): UpdateCart {
    return {
        type: ActionTypes.UPDATE_CART,
    }
}

export function removeFromCartAction(): RemoveFromCart {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
    }
}