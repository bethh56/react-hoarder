import React from 'react';
import { Link } from 'react-router-dom';

import './SingleStuff.scss';
import stuffData from '../../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  deleteItem = (e) => {
    const { itemId } = this.props.match.params;
    stuffData.deleteStuff(itemId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete', err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const editItem = `/edit/${itemId}`;
    return (
      <div className="col-6 mx-auto mt-2">
        <h2 className="m-3">{item.itemName}</h2>
        <button className="btn btn-danger m-1" onClick={this.deleteItem}>Delete</button>
        <Link className="btn btn-success m-1" to={editItem}>Edit</Link>
          <div className="card m-1">
         <img className="card-img-top" src={item.itemImage} alt={item.itemName}></img>
          <div className="card-body">
          <p>{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
