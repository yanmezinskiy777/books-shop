import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {
  Routes,
  Route,
} from "react-router-dom";
import { Container } from "reactstrap";

import { Header } from "./components/layouts";
import { BooksList } from "./components/pages";
import { Cart } from "./components/pages"

import { api } from "./api"
import { booksNormalization } from "./utils"
import { getBooks } from "../redux/actions/books-actions"

import style from "./styles/app.module.scss";

const App = () => {

  const dispath = useDispatch()

  const books = useSelector(({ books }) =>  books.books)

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await api({ type: 'books' })
      dispath(getBooks((booksNormalization(result))))
      console.log('FETCHING')
    }
    fetchBooks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
      <div className={style.wrapper}>
        <Header />
        <Container>
          <Routes>
              <Route exact path="/" element={<BooksList items={books} />} />
              <Route exact path="/cart" element={<Cart/>} />
          </Routes>
        </Container>
      </div>
  );
};

export default App;
