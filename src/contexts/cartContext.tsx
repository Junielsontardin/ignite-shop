import { ActionTypes, cartReducer } from '@/reducers/cartReducer/reducer';
import { createContext, useContext, useReducer } from 'react';

export interface Item {
    id: string,
    name: string,
    price: number,
    priceId: string,
    imageUrl: string,
    quantity: number,
}

interface CartContextValues {
    cart: Item[]
    addItemToCart: (item: Item) => void
    removeItemToCart: (id: string) => void
}

const CartContext = createContext({} as CartContextValues)

const CartContextProvider = ({ children }: any) => {
    const [cart, dispatch] = useReducer(cartReducer, [])

    const addItemToCart = (item: Item) => {
        dispatch({
            type: ActionTypes.ADD_ITEM_CART,
            payload: item
        })
    }

    const removeItemToCart = (id: string) => {
        dispatch({
            type: ActionTypes.REMOVE_ITEM_CART,
            payload: id
        })
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addItemToCart,
            removeItemToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);