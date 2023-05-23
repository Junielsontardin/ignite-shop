import Image from "next/image"
import Camisa from "../../assets/t-shirt2.png"
import { ItemContainer, ImageBackground, InformationsItemCart } from "./style"
import { useCartContext } from "@/contexts/cartContext"
import { formatPriceToBrl } from "@/utils/formatPriceToBrl"

interface ItemCartProps {
    id: string
    name: string
    price: number,
    imageUrl: string,
}

export const ItemCart = ({ 
    id,
    name,
    price,
    imageUrl
}: ItemCartProps) => {

    const { removeItemToCart } = useCartContext()

    const handleRemoveItemToCart = () => {
        removeItemToCart(id)
    }

    return (
        <ItemContainer>
            <ImageBackground>
                <Image src={imageUrl} width={100} height={100} alt=""/>
            </ImageBackground>
            <InformationsItemCart>
                <span>{name}</span>
                <span>{formatPriceToBrl(price)}</span>
                <button onClick={handleRemoveItemToCart}>Remover</button>
            </InformationsItemCart>
        </ItemContainer>
    )
}