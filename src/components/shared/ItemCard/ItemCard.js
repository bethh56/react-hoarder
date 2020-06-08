import React from 'react';

import './ItemCard.scss';

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <h1>{item.itemName}</h1>
      </div>
    );
  }
}

export default ItemCard;
