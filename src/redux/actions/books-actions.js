import { booksActionTypes } from "./books-action-types"

export const getBooks = (books) => ({
    type: booksActionTypes.GET_BOOKS,
    payload: books
})