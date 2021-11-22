import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, CardColumns } from "reactstrap";
import CartItem from "./cart-item";
import { clearCart } from "../../../../redux/actions/cart-actions"

import style from "./cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(({ cart }) => cart.cart);

  const ids = Object.keys(cart);
  const booksInCart = ids.map((id) => cart[id].items[0]);

  const onClearCart = () => dispatch(clearCart())

  console.log(booksInCart);

  return (
    <>
      <div className={style.cartHeader}>
        <Button onClick={onClearCart}>Очистить корзину</Button>
      </div>
      <CardColumns className={style.cart}>
        {booksInCart &&
          booksInCart.map((book) => (
            <CartItem
              key={book.id}
              {...book}
              totalPrice={cart[book.id].totalPrice}
              totalCount={cart[book.id].items.length}
            />
          ))}
      </CardColumns>
      <div className={style.cartFooter}>
        <Button>вернуться назад</Button>
        <Button>оплатить</Button>
      </div>
    </>
  );
};

export default Cart;
