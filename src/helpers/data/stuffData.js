import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getItemByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbItems = response.data;
      const items = [];
      if (fbItems) {
        Object.keys(fbItems).forEach((fbId) => {
          fbItems[fbId].id = fbId;
          items.push(fbItems[fbId]);
        });
      }
      resolve(items);
    })
    .catch((err) => reject(err));
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const addNewStuff = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

const deleteStuff = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

const editStuff = (itemId, editItem) => axios.put(`${baseUrl}/items/${itemId}.json`, editItem);

export default {
  getItemByUid,
  getSingleItem,
  addNewStuff,
  deleteStuff,
  editStuff,
};
