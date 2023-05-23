import { Item } from "@/contexts/cartContext"
import { addItemToCartAction, removeItemToCartAction } from "./actions"

export enum ActionTypes {
    ADD_ITEM_CART = "ADD_ITEM_CART",
    REMOVE_ITEM_CART = "REMOVE_ITEM_CART"
}

interface AddItemToCart {
    type: ActionTypes.ADD_ITEM_CART,
    payload: Item
}

interface RemoveItemToCart {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: string
}

type CartReducerActions = AddItemToCart | RemoveItemToCart

export const cartReducer = (state: Item[], action: CartReducerActions) => {
    switch(action.type) {
        case ActionTypes.ADD_ITEM_CART: 
            return addItemToCartAction(state, action.payload);
        case ActionTypes.REMOVE_ITEM_CART: 
            return removeItemToCartAction(state, action.payload);
    }
}