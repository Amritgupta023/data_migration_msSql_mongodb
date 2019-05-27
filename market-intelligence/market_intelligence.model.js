'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema

let MarketingIntelligenceSchema = new Schema({
  date: {
    type: Date
  },
  // fileType:{
  //   type:String
  // },
  advertisement:{
    type:String,
  },
  secondReport:{
    type:String,
  },
  newArticle:{
    type:String,
  },
  brandBanking: {
    type: String
  },
  productBanking: {
    type: Array
  },
  officeBanking: {
    type: Array
  },
  filename: {
    type: String
  },
  docType:{
    type:String
  },
  comment: {
    type: String
  },
  createdDate:{
    type:Date
  },
  tempId:{
    type:Number
  }
})

var market_intelligence = mongoose.model("marketing-intelligence", MarketingIntelligenceSchema);
module.exports=market_intelligence;
