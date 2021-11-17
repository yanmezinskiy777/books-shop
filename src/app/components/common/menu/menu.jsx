import React from "react";
import { Row, Col, Badge } from "reactstrap";
import { connect } from "react-redux";

import { menu } from "./constant";
import MenuSort from "./menu-sort";
import { setFilter } from "../../../../redux/actions/filter-actions";

import style from "./menu.module.scss";

const Menu = ({ filter, setFilter }) => {
  const setSelectActive = (value) => setFilter(value);

  console.log(filter);

  return (
    <Row>
      <Col xs="12" className={style.menu}>
        <div>
          {menu.map((item) => {
            return (
              <Badge
              key={item.id}
              onClick={() => setSelectActive(item.value)}
              color={filter === item.value ? "dark" : "secondary"}
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

const mapDispathToProps = (dispath) => {
  return {
    setFilter: (filter) => dispath(setFilter(filter)),
  };
};

const mapStateToProps = (state) => {
  return {
    filter: state.activeFilter,
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Menu);
