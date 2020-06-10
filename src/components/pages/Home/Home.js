import React from 'react';

import './Home.scss';
import ItemCard from '../../shared/ItemCard/ItemCard';
import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class Home extends React.Component {
  state = {
    items: [],
  }

 getItems = () => {
   const uid = authData.getUid();
   stuffData.getItemByUid(uid)
     .then((items) => this.setState({ items }))
     .catch((err) => console.error('unable to get items', err));
 }

 componentDidMount() {
   this.getItems();
 }

 deleteItem = (itemId) => {
   stuffData.deleteStuff(itemId)
     .then(() => this.getItems())
     .catch((err) => console.error('unable to delete', err));
 }

 render() {
   const { items } = this.state;
   const buildItemCards = items.map((item) => (
      <ItemCard key={item.id} item={item} deleteItem={this.deleteItem}/>
   ));
   return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildItemCards}
        </div>
      </div>
   );
 }
}

export default Home;
