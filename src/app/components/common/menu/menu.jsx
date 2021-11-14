import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import { menu } from "./constant";
import MenuItem from "./menu-item";
import MenuSort from "./menu-sort"
import style from "./menu.module.scss";

const Menu = () => {
  const [active, setActive] = useState("all");

  return (
    <Row>
      <Col xs="12" className={style.menu}>
        <div>
            {menu.map((item) => {
            
            const onSetActiveBadge = () => {
                console.log(item.value)
                setActive(item.value)
            }

            return (<MenuItem
                key={item.id}
                data={item}
                onClickBadge={onSetActiveBadge}
                active={active === item.value ? true : false}
            />)
            }
            )}
        </div>
        <MenuSort />
      </Col>
    </Row>
  );
};

export default Menu;
