import React from "react";

import { CardGroup } from "reactstrap";
import { useDispatch } from "react-redux";

import { Menu } from "../../common";
import BookCard from "./book-card/book-card";
import BookPlaceholder from "./book-card/book-placeholder";
import { addBookToCart } from "../../../../redux/actions/cart-actions"

import style from "./book-list.module.scss";

const BooksList = ({ items, loaded, activeFilter, activeSort }) => {
  console.log(items);
  const dispatch = useDispatch()

  const onAddBookToCart = (book) => {
       dispatch(addBookToCart(book))
  }

  return (
    <div>
      <Menu activeFilter={activeFilter} activeSort={activeSort} />
      <CardGroup className={style.bookList}>
        {loaded
          ? items && items.map((card) => <BookCard key={card.id} {...card} onAddbook={onAddBookToCart} />)
          : Array.from({ length: 6 }, (_, i) => <BookPlaceholder key={i} />)}
      </CardGroup>
    </div>
  );
};

export default BooksList;
