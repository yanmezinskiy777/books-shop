import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "../reducers/filter-reducer";
import { booksReducer } from "../reducers/books-reducer";
import { cartReducer } from "../reducers/cart-reducer";

const reducer = combineReducers({
  filters: filterReducer,
  books: booksReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
