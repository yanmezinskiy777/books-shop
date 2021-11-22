import React from "react";
import { useDispatch } from 'react-redux'
import { deleteOneBook } from "../../../../redux/actions/cart-actions"

import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

import style from "./cart.module.scss"

const CartItem = ({ id, title, imageUrl, type, totalPrice, totalCount }) => {
    const dispatch = useDispatch()
    const onDeleteItem = () => dispatch(deleteOneBook(id))
  return (
    <Card className={style.cartItem}>
      <CardImg
        alt={title}
        src={imageUrl}
        left
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          обложка {type}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h7">
           всего {totalPrice} $
        </CardSubtitle>
        <CardText className="mb-5"> 
           <Button>-</Button>
             {totalCount}
           <Button>+</Button>
        </CardText>
        <CardText>
            <Button onClick={onDeleteItem}>Удалить</Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CartItem;
