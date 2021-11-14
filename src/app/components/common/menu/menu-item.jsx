import React from "react";
import { Badge } from "reactstrap";

import style from "./menu.module.scss";

const MenuItem = ({ data, onClickBadge, active }) => {

  const { title } = data;

  console.log("RENDER ITEM");
  return (
    <Badge
      onClick={onClickBadge}
      color={active ? "dark" : "secondary"}
      className={style.badge}
    >
      {title}
    </Badge>
  );
};

export default React.memo(MenuItem);
