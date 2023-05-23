import { useCartContext } from "@/contexts/cartContext"
import { Bag } from "@phosphor-icons/react"
import Image from "next/image"
import { ProductCardContainer } from "./style"
import { formatPriceToBrl } from "@/utils/formatPriceToBrl"

interface ProductCardProps {
    id: string
    name: string
    price: number
    priceId: string
    imageUrl: string
}

export const ProductCard = (product: ProductCardProps) => {
    const { addItemToCart } = useCartContext()

    const handleAddItemToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()

        const productToAdd = {
            ...product,
            quantity: 1
        }

        addItemToCart(productToAdd)
    }

    return (
        <ProductCardContainer>
            <Image src={product.imageUrl} width={520} height={480} alt=""/>
            <footer>
                <div>
                    <span>{product.name}</span>
                    <span>{formatPriceToBrl(product.price)}</span>
                </div>
                <button onClick={handleAddItemToCart}>
                    <Bag size={24} weight="bold"/>
                </button>
            </footer>
        </ProductCardContainer>
    )
}