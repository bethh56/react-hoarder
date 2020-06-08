import React from 'react';

import './SingleStuff.scss';
import stuffData from '../../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    item: [],
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get a single item', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div>
        <h1> Check </h1>
      </div>
    );
  }
}

export default SingleStuff;
