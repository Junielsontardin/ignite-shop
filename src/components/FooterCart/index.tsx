import { FooterInformationsCart, LabelSummaryCart } from "./style"

export const FooterCart = () => {
    return (
        <FooterInformationsCart>
            <LabelSummaryCart>
                <span>Quantidade</span>
                <span>3</span>
            </LabelSummaryCart>
            <LabelSummaryCart>
                <span>Valor total</span>
                <span>R$ 270,00</span>
            </LabelSummaryCart>
            <button>
                Finalizar Compra
            </button>
        </FooterInformationsCart>
    )
}