import axios from 'axios';

export default {
  //get all users
  getAllUsers: function() {
    return axios.get('/api/users');
  },
  //create new user
  addNewUser: function(postData) {
    return axios.post('/api/users', postData)
  } 
};