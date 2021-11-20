import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  CardFooter,
  ButtonGroup,
  Button,
} from "reactstrap";

import style from "../book-list.module.scss";

const types = ["твердая", "мягкая"];

const BookCard = ({ title, author, imageUrl, price, type, pages, id, onAddbook }) => {
 
  const [activeType, setActiveType] = useState(type[0]);

  const addBookToCart = () => {
    const book = {
      id,
      title,
      imageUrl,
      price,
      type: types[activeType]
    }
    onAddbook(book)
  }

  return (
    <Card>
      <CardImg
        className={style.imageCard}
        alt={title}
        src={imageUrl}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-1 text-muted" tag="h6">
          {author}
        </CardSubtitle>
        <CardText>{price} $</CardText>
        <p>Тип обложки:</p>
        <ButtonGroup>
          {types.map((item, i) => (
            <Button
              active={activeType === i}
              disabled={!type.includes(i)}
              key={i}
              onClick={() => setActiveType(i)}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
        <CardText className="mt-2">{pages} pages</CardText>
      </CardBody>
      <CardFooter>
        <Button onClick={addBookToCart}>добавить</Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
