import React from 'react';

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

  render() {
    const { item } = this.state;
    return (
      <div className="col-6 mx-auto mt-2">
          <div className="card border-dark m-1">
         <img className="card-img-top" src={item.itemImage} alt={item.itemName}></img>
          <div className="card-body">
          <h4 className="card-title">{item.itemName}</h4>
          <p>{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
