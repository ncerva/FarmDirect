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
  //login user by email GET
  loginUser: function(email) {
    return axios.get(`api/users/${email}`)
  },
  //get all farmers
  getAllFarmers: function() {
    return axios.get('/api/farmer')
  },
  //create new farmer POST
  addNewFarmer: function (postData) {
    return axios.post('/api/farmer', postData)
  },
  loginFarmer: function(email) {
    return axios.get(`api/farmer/${email}`)
  },
  getFarm: function(token) {
    return axios.get(`api/farm/${token}`)
  },
  updateFarm: function(token) {
    return axios.put(`api/farm/${token}`)
  }
};