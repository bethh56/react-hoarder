import React from 'react';

import './NewStuff.scss';
import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';

class NewStuff extends React.Component {
  state = {
    newName: '',
    newImage: '',
    newDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ newName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ newImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ newDescription: e.target.value });
  }

  saveNewItem = (e) => {
    e.preventDefault();
    const { newName, newImage, newDescription } = this.state;
    const newItem = {
      itemName: newName,
      itemImage: newImage,
      itemDescription: newDescription,
      uid: authData.getUid(),
    };
    stuffData.addNewStuff(newItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save new item', err));
  }


  render() {
    const { newName, newImage, newDescription } = this.state;

    return (
      <div className="NewStuff">
        <h2 className="mt-2">Add a New Item</h2>
        <form className="col-8 mx-auto text-left">
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={newName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={newImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={newDescription}
              onChange={this.descriptionChange}
            />
          </div>
        </form>
        <button className="btn btn-warning mx-auto" onClick={this.saveNewItem}>Submit</button>
      </div>
    );
  }
}

export default NewStuff;
