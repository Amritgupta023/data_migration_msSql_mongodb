'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectArchiveSchema = new Schema({
  filename1: {
    type: Array
  },
  filenameUuid1: {
    type: Array
  },
  filename2: {
    type: Array
  },
  filenameUuid2: {
    type: Array
  },
  filename3: {
    type: Array
  },
  filenameUuid3: {
    type: Array
  },
  filename4: {
    type: Array
  },
  filenameUuid4: {
    type: Array
  },
  filename5: {
    type: Array
  },
  filenameUuid5: {
    type: Array
  },


  projectName: {
    type: String
  },
  year: {
    type: String
  },
  projectType: {
    type: String
  },
  productName: {
    type: String
  },
  month: {
    type: String
  },
  projectBackground: {
    type: String
  },
  projectNature: {
    type: String
  },
  country:{
    type:String
  },
  createdDate:{
    type:Date
  },
  updatedDate:{
    type:Date
  },
  createdById:{
    type:mongoose.Schema.Types.ObjectId,
  },
  updatedById:{
    type:mongoose.Schema.Types.ObjectId,
  },
  loginById:{
    type:Number
  },
  fileId:{
    type:Number
  }

})

  var project_archive = mongoose.model("project-archive", projectArchiveSchema);
  module.exports=project_archive;