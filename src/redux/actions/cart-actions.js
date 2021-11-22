import { cartActionsTypes } from "./types/cart-actions-types"

export const addBookToCart = (book) => ({
    type: cartActionsTypes.ADD_BOOK_TO_CART,
    payload: book
})

export const clearCart = () => ({
    type: cartActionsTypes.CLEAR_CART
})

export const deleteOneBook = (id) => ({
    type: cartActionsTypes.DELETE_ONE_BOOK,
    payload: id
})