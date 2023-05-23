import { Item } from "@/contexts/cartContext";

export const addItemToCartAction = (
    items: Item[],
    item: Item
) => {

    const cartItemIndex = items.findIndex(
        (cartItem) => cartItem.id === item.id,
    )

    if (cartItemIndex < 0) {
        return [...items, item]
    }

    items[cartItemIndex].quantity += item.quantity

    return [...items]

}

export const removeItemToCartAction = (
    items: Item[],
    id: string
) => {
    const itemsWithoutRemovedItem = items.filter(item => item.id !== id);

    return itemsWithoutRemovedItem;
}