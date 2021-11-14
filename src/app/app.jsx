import React, { useEffect, useState } from "react";
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

import style from "./styles/app.module.scss";

const App = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const result = await api({ type: 'books' })
      setBooks(booksNormalization(result))
    }
    getBooks()
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
