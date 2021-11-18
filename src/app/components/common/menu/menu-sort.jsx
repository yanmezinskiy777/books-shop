import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { sort } from "./constant";
import { setCategory } from "../../../../redux/actions/filter-actions"

const MenuSort = () => {

  const dispatch = useDispatch()

  const [activeCategory, setActiveCategory] = useState('popular')
  const [isShowSort, setShowSort] = useState(false);

  const toggleSort = () => setShowSort((prev) => !prev);

  const onSelectAtiveCategory = (value) => {
    dispatch(setCategory(value))
    setActiveCategory(value)
  }

  const getActiveCatrgory = () => sort.find(cat => cat.value === activeCategory).title

  console.log('RENDER SORT')

  return (
    <Dropdown isOpen={isShowSort} toggle={toggleSort}>
      <DropdownToggle caret>Сортировать по {getActiveCatrgory()}</DropdownToggle>
      <DropdownMenu>
        {sort.map(({ title, id, value }) => (
          <DropdownItem
            key={id}
            onClick={() => onSelectAtiveCategory(value)}
            active={value === activeCategory}
          >
            {title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default React.memo(MenuSort);
