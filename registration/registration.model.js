var mongoose = require('mongoose');

var nameSchema = new mongoose.Schema({
        name: {
          type: String,
        },
        hash_password: {
          type: String
        },
        email: {
          type: String
        },
        role : {
          type: String
        },
        createdat: {
          type: Date,
        },
        createdByID:{
          type:mongoose.Schema.Types.ObjectId,
        },
        updatedDate: {
          type:Date,
        },
        updatedByID:{
          type:String,
        },
        id:{
          type:Number,
        },
        c:{
          type:Number,
        }
      }, { runSettersOnQuery: true}
    );

  var registration = mongoose.model("users", nameSchema);

  module.exports=registration;