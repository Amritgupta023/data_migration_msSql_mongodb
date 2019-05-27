'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema
let CustomerConnectFileSchema = new Schema({
  originalFileName: {
    type: String,
    required: true
  },
  savedFileName: {
    type: String
  },
  recordsCount: {
    type: Number
  },
  integrityIssue: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

var customer_connect_file_model = mongoose.model("customer-connect-files", CustomerConnectFileSchema);
module.exports=customer_connect_file_model;