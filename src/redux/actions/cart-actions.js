import { cartActionsTypes } from "./types/cart-actions-types"

export const addBookToCart = (book) => ({
    type: cartActionsTypes.ADD_BOOK_TO_CART,
    payload: book
})