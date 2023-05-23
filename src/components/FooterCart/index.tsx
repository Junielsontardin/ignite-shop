import { useCartContext } from "@/contexts/cartContext"
import { FooterInformationsCart, LabelSummaryCart } from "./style"
import { formatPriceToBrl } from "@/utils/formatPriceToBrl";
import { useState } from "react";
import axios from 'axios'

interface PayloadCheckout {
    price: string
    quantity: number
}

interface ResponseCheckout {
    checkoutUrl: string
}

export const FooterCart = () => {
    const [isLoadingToCheckout, setIsLoadingToCheckout] = useState(false);
    const { cart } = useCartContext();

    const handleBuyButton = async () => {
        try {
            setIsLoadingToCheckout(true)

            const payload = cart.reduce((payloadItems: PayloadCheckout[], currentItem) => {
                let tempItem = {
                    price: currentItem.priceId,
                    quantity: currentItem.quantity
                }

                payloadItems.push(tempItem);

                return payloadItems;
            }, [])

            const response = await axios.post<ResponseCheckout>('/api/checkout', payload)
      
            const { checkoutUrl } = response.data;
      
            window.location.href = checkoutUrl;
      
          } catch(err) {
            setIsLoadingToCheckout(false)
            alert("Falha ao redirecionar para o checkout!")
          }
    }

    let totalItems = 0;
    let totalPrice = 0

    cart.forEach((item) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity
    })

    return (
        <FooterInformationsCart>
            <LabelSummaryCart>
                <span>Quantidade</span>
                <span>{totalItems}</span>
            </LabelSummaryCart>
            <LabelSummaryCart>
                <span>Valor total</span>
                <span>{formatPriceToBrl(totalPrice)}</span>
            </LabelSummaryCart>
            <button 
                onClick={handleBuyButton}
                disabled={!cart.length || isLoadingToCheckout}
            >
                Finalizar Compra
            </button>
        </FooterInformationsCart>
    )
}