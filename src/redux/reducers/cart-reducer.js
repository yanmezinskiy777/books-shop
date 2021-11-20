import { cartActionsTypes } from "../actions/types/cart-actions-types";

export const initialCart = {
  cart: {},
  totalItems: 0,
  totalPrice: 0,
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case cartActionsTypes.ADD_BOOK_TO_CART:
      const curItem = {
        ...state.cart,
        [action.payload.id]: !state.cart[action.payload.id]
          ? [action.payload]
          : [...state.cart[action.payload.id], action.payload],
      };

      const allItems = [].concat.apply([], Object.values(curItem))
      const totalPrice = allItems.reduce((acc, cur) => acc + cur.price ,0)

      return {
        ...state,
        cart: curItem,
        totalItems: allItems.length,
        totalPrice
      };
    default:
      return state;
  }
};
