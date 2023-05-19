import Image from "next/image"
import Camisa from "../../assets/t-shirt2.png"
import { ItemContainer, ImageBackground, InformationsItemCart } from "./style"

export const ItemCart = () => {
    return (
        <ItemContainer>
            <ImageBackground>
                <Image src={Camisa} width={100} height={100} alt=""/>
            </ImageBackground>
            <InformationsItemCart>
                <span>Camiseta Beyond the Limits</span>
                <span>R$ 79,90</span>
                <button>Remover</button>
            </InformationsItemCart>
        </ItemContainer>
    )
}