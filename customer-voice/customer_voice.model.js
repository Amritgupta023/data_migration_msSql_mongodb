'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema
let CustomerVoiceSchema = new Schema({
  fileName: {
    type: String
  },
  studyType: {
    type: String
  },
  customerSegment: {
    type: Array
  },
  verbatimSentiments: {
    type: String
  },
  verbatimTheme: {
    type: Array
  },
  yearOfStudy: {
    type: String
  },
  monthOfStudy: {
    type: String
  },
  country: {
    type: String
  },
  nationality: {
    type: Array
  },
  fileType: {
    type: String
  },
  file: {
    type: Object
  },
  noOfMonth:{
    type:Number
  }
})
var customer_voice = mongoose.model("customer-voice", CustomerVoiceSchema);
module.exports=customer_voice;