import React from 'react';

import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';
import './EditStuff.scss';

class EditStuff extends React.Component {
  state = {
    editName: '',
    editImage: '',
    editDescription: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    stuffData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          editName: item.itemName,
          editImage: item.itemImage,
          editDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('unable to edit', err));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ editName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ editImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ editDescription: e.target.value });
  }

  editItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const { editName, editImage, editDescription } = this.state;
    const editItem = {
      itemName: editName,
      itemImage: editImage,
      itemDescription: editDescription,
      uid: authData.getUid(),
    };
    stuffData.editStuff(itemId, editItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save new item', err));
  }


  render() {
    const { editName, editImage, editDescription } = this.state;
    return (
      <div className="EditStuff">
        <h1>Edit Stuff</h1>
        <form className="col-8 mx-auto text-left">
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={editName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={editImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={editDescription}
              onChange={this.descriptionChange}
            />
          </div>
        </form>
        <button className="btn btn-warning mx-auto" onClick={this.editItem}>Update Item</button>
      </div>
    );
  }
}

export default EditStuff;
