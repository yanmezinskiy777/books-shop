import { createStore } from 'redux'
import { filterReducer, initialFilter } from "../reducers/root-reducer"

const store = createStore(filterReducer, initialFilter)

export default store