import { createContext, useContext } from 'react';

interface CartContextValues {
    items: {
        name: string,
        price: string
    }[]
}

const CartContext = createContext({} as CartContextValues)


const CartContextProvider = ({ children }: any) => {
    
    return (
        <CartContext.Provider value={{
            items: [{
                name: 'Camiseta',
                price: '100'
            }]
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);