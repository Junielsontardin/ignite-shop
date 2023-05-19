import * as Dialog from '@radix-ui/react-dialog';
import { Bag, X } from "@phosphor-icons/react";
import { ButtonCloseCart, CartContent, ListItems, TitleCart } from './style';
import { ItemCart } from '../ItemCart';
import { FooterCart } from '../FooterCart';

export const Cart = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button>
                    <Bag size={24} weight="bold" />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay />
                <CartContent>
                    <ButtonCloseCart asChild>
                        <button>
                            <X size={24} weight="bold" />
                        </button>
                    </ButtonCloseCart>
                    <TitleCart>Sacola de compras</TitleCart>
                    <ListItems>
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                    </ListItems>
                    <FooterCart />
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}