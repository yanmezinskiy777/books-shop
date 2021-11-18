import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { Row, Col, Badge } from "reactstrap";

import { menu } from "./constant";
import MenuSort from "./menu-sort";
import { setFilter } from "../../../../redux/actions/filter-actions";

import style from "./menu.module.scss";

const Menu = () => {

  const dispath = useDispatch()

  const [activeFilter, setActiveFilter] = useState('all')

  const setSelectActive = (value) => {
    setActiveFilter(value)
    dispath(setFilter(value))
  };

  console.log("RENDER MENU");

  return (
    <Row>
      <Col xs="12" className={style.menu}>
        <div>
          {menu.map((item) => {
            return (
              <Badge
                key={item.id}
                onClick={() => setSelectActive(item.value)}
                color={activeFilter === item.value ? "dark" : "secondary"}
                className={style.badge}
              >
                {item.title}
              </Badge>
            );
          })}
        </div>
        <MenuSort />
      </Col>
    </Row>
  );
};


export default Menu;
