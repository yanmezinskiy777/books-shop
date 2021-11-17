import React from "react";

import { CardGroup } from "reactstrap";

import { Menu } from "../../common";
import BookCard from "./book-card"

import style from "./book-list.module.scss"

const BooksList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <Menu />
      <CardGroup className={style.bookList}>
          {items && items.map(card => <BookCard key={card.id} {...card} />)}
      </CardGroup>
    </div>
  );
};

export default BooksList;
