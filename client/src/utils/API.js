import axios from 'axios';
require("dotenv").config();


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
    return axios.get(`/api/farm/${token}`)
  },
  getFarmProfile: function(id) {
    return axios.get(`/api/farm/profile/${id}`)
  },
  getFarmsByZip: function(zipcode) {
    return axios.get(`/api/farm/zip/${zipcode}`)
  },
  createFarmById: function(token) {
    return axios.post(`api/farm/${token}`)
  },
  updateFarm: function(token, body) {
    return axios.put(`api/farm/${token}`, body)
  }, 
  getProductsByFarmer: function(token) {
    return axios.get(`api/product/${token}`)
  },
  getProductsForProfile: function(token) {
    return axios.get(`/api/product/profile/${token}`)
  },
  addProduct: function(postData) {
    return axios.post(`api/product/`, postData)
  },
  updateProduct: function(token, body) {
    return axios.put(`api/product/${token}`, body)
  },
  deleteProduct: function(id) {
    return axios.delete(`api/product/${id}`)
  },
  getZips: function(zipcode, radius) {
    return axios.get(`api/zip/${zipcode}/${radius}`)
  },
  bigChungus: function(zipArray) {
    return axios.get(`api/farm/bigchungus`, {params: {zipcodes: zipArray}})
  }
};