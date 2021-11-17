import React, { useState } from "react";
import { connect } from 'react-redux'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { sort } from "./constant";
import { setCategory } from "../../../../redux/actions/filter-actions"

const MenuSort = ({ category, setActiveCategory }) => {

  const [isShowSort, setShowSort] = useState(false);

  const toggleSort = () => setShowSort((prev) => !prev);

  const getActiveCatrgory = () => sort.find(cat => cat.value === category).title

  return (
    <Dropdown isOpen={isShowSort} toggle={toggleSort}>
      <DropdownToggle caret>Сортировать по {getActiveCatrgory()}</DropdownToggle>
      <DropdownMenu>
        {sort.map(({ title, id, value }) => (
          <DropdownItem
            key={id}
            onClick={() => setActiveCategory(value)}
            active={value === category ? true : false}
          >
            {title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const mapDispathToProps = (dispatch) => {
  return{
    setActiveCategory: (category) => dispatch(setCategory(category))
  }
}

const mapStateToProps = (state) => {
  return{
    category: state.activeSort
  }
}

export default connect(mapStateToProps, mapDispathToProps)(MenuSort);
