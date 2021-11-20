/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";

import { Header } from "./components/layouts";
import { BooksList } from "./components/pages";
import { Cart } from "./components/pages";

import { fetchBooks } from "../redux/actions/books-actions";

import style from "./styles/app.module.scss";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const books = useSelector(({ books }) => books.books);
  const isLoaded = useSelector(({ books }) => books.loaded);
  const activeFilter = useSelector(({ filters }) => filters.activeFilter);
  const activeSort = useSelector(({ filters }) => filters.activeSort);
  const { totalItems, totalPrice } = useSelector(({ cart }) => ({ totalItems: cart.totalItems, totalPrice: cart.totalPrice }))

  useEffect(() => {
    dispatch(fetchBooks(activeFilter, activeSort));
    console.log("FETCHING");
  }, [activeFilter, activeSort]);

  return (
    <div className={style.wrapper}>
      <Header totalItems={totalItems} totalPrice={totalPrice} />
      <Container>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <BooksList
                items={books}
                loaded={isLoaded}
                activeFilter={activeFilter}
                activeSort={activeSort}
              />
            }
          />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
