import React, { useState, useCallback } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { sort } from "./constant";

const MenuSort = () => {
  const [isShowSort, setShowSort] = useState(false);
  const [activeSort, setActiveSort] = useState("popular");

  const toggleSort = () => setShowSort((prev) => !prev);

  const onClickSort = useCallback((value) => (setActiveSort(value)),[]);

  const getActiveSortName = () => sort.find(({ value }) => value === activeSort).title

  return (
    <Dropdown isOpen={isShowSort} toggle={toggleSort}>
      <DropdownToggle caret>Сортировать по {getActiveSortName()}</DropdownToggle>
      <DropdownMenu>
        {sort.map(({ title, id, value }) => (
          <DropdownItem
            key={id}
            onClick={() => onClickSort(value)}
            active={value === activeSort ? true : false}
          >
            {title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MenuSort;
