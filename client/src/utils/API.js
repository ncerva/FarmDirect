import axios from 'axios';

export default {
  //get all users
  getAllUsers: function() {
    return axios.get('/api/users')
  },
  //create new user POST
  addNewUser: function(postData) {
    return axios.post('/api/users', postData)
  },
  //get all farmers
  getAllFarmers: function() {
    return axios.get('/api/farmer')
  },
  //create new farmer POST
  addNewFarmer: function (postData) {
    return axios.post('/api/farmer', postData)
  }
};