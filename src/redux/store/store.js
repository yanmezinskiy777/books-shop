import { createStore, combineReducers } from 'redux'
import { filterReducer } from "../reducers/filter-reducer"
import { booksReducer } from "../reducers/books-reducer"

const reducer = combineReducers({ filters: filterReducer, books: booksReducer})

const store = createStore(reducer)

export default store