import { booksActionTypes } from "../actions/books-action-types"

export const initialBooks = {
    books: [],
    loaded: false 
}

export const booksReducer = (state = initialBooks, action) => {
    switch(action.type){
        case  booksActionTypes.GET_BOOKS:
            return{
                ...state,
                books: action.payload,
                loaded: true
            }
        default:
            return state
    }
}   