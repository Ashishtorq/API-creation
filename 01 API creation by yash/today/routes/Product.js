const Router = require('express').Router()
const {
  getAllData,
  editData,
  deleteData,
  postData,
} = require('../controllers/Product')

Router.get('/getData', getAllData)
Router.put('/editData', editData)
Router.delete('/productDelete', deleteData)
Router.post('/postData', postData)

module.exports = Router
