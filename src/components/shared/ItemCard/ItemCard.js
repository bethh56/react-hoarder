import React from 'react';
import { Link } from 'react-router-dom';

import './ItemCard.scss';

class ItemCard extends React.Component {
  render() {
    const { item, deleteItem } = this.props;
    const singleLink = `/item/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-4">
        <div className="card border-dark m-2 p-2">
         <img className="card-img-top" src={item.itemImage} alt={item.itemName}></img>
          <div className="card-body">
          <h6 className="card-title">{item.itemName}</h6>
          <Link className="btn btn-dark m-1" to={singleLink}> View </Link>
          <Link className="btn btn-success m-1" to={editLink}> Edit </Link>
          <button className="btn btn-danger m-1" onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
