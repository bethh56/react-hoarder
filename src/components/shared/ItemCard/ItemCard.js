import React from 'react';

import './ItemCard.scss';

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard col-2">
        <div class="card">
         <img class="card-img-top" src={item.itemImage} alt={item.itemName}></img>
          <div class="card-body">
          <h6 class="card-title">{item.itemName}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
