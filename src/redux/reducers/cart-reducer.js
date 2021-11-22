import { cartActionsTypes } from "../actions/types/cart-actions-types";

export const initialCart = {
  cart: {},
  totalItems: 0,
  totalPrice: 0,
};

const getTotalSum = arr => arr.reduce((acc, cur) => acc + cur.price ,0)

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case cartActionsTypes.ADD_BOOK_TO_CART:

      const item = !state.cart[action.payload.id]
      ? [action.payload]
      : [...state.cart[action.payload.id].items, action.payload]

      const items = {
        items: item,
        totalPrice: getTotalSum(item)
      }

      const curItems = {
        ...state.cart,
        [action.payload.id]: items,
      };

      const arr = Object.values(curItems).map(el => el.items)
      const allItems = [].concat.apply([], arr)
      const totalPrice = getTotalSum(allItems)

      return {
        ...state,
        cart: curItems,
        totalItems: allItems.length,
        totalPrice
      };
      case cartActionsTypes.DELETE_ONE_BOOK:{

        const items = {...state.cart}

        const cutPrice = items[action.payload].totalPrice
        const curItems = items[action.payload].items.length

        delete items[action.payload]

        return{
          ...state,
          cart: items,
          totalPrice: state.totalPrice - cutPrice,
          totalItems: state.totalItems - curItems
        }
      }
      case cartActionsTypes.CLEAR_CART: 
         return{
           ...initialCart
         }
    
    default:
      return state;
  }
};
