import React from "react";
import { useDispatch } from "react-redux"
import { Row, Col, Badge } from "reactstrap";

import { menu } from "./constant";
import MenuSort from "./menu-sort";
import { setFilter } from "../../../../redux/actions/filter-actions";

import style from "./menu.module.scss";

const Menu = ({ activeFilter, activeSort }) => {

  const dispath = useDispatch()

  const setSelectActive = (value) => {
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
        <MenuSort activeSort={activeSort} />
      </Col>
    </Row>
  );
};


export default Menu;
