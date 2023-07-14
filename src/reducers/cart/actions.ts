import { CoffeeType } from "./reducer";

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    UPDATE_CART = 'UPDATE_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

interface AddCoffeeCart {
    type: ActionTypes.ADD_NEW_COFFEE;
    payload: {
        newCoffee: CoffeeType;
    };
}

interface UpdateCart {
    type: ActionTypes.UPDATE_CART;
    payload: {
        currentCoffee: string;
        quantity: number;
    }
}

interface RemoveFromCart {
    type: ActionTypes.REMOVE_FROM_CART;
    payload: {
        currentCoffee: string;
    }
}

export type ActionType =
    | AddCoffeeCart
    | UpdateCart
    | RemoveFromCart;

export function addNewCoffeeAction(newCoffee: CoffeeType): AddCoffeeCart {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            newCoffee,
        }
    }
}

export function updateCartAction(coffeeName: string, quantity: number): UpdateCart {
    return {
        type: ActionTypes.UPDATE_CART,
        payload: {
            currentCoffee: coffeeName,
            quantity: quantity
        }

    }
}

export function removeFromCartAction(coffeeName: string): RemoveFromCart {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            currentCoffee: coffeeName,
        }
    }
}