import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const ItemList = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item">{props.items.map((item, index) => <Item key={index} item={item} />)}</ol>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
