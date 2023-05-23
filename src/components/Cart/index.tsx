import * as Dialog from '@radix-ui/react-dialog';
import { Bag, X } from "@phosphor-icons/react";
import { ButtonCloseCart, CartContent, ListItems, TitleCart } from './style';
import { ItemCart } from '../ItemCart';
import { FooterCart } from '../FooterCart';
import { useCartContext } from '@/contexts/cartContext';

export const Cart = () => {
    const { cart } = useCartContext()

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
                        {cart?.map((item) => {
                            return <ItemCart
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                            />
                        })}
                    </ListItems>
                    <FooterCart />
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}