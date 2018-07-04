var mongoose = require('mongoose');

var nameSchema = new mongoose.Schema({
    logInBy: {
        type:mongoose.Schema.Types.ObjectId,
      },
      userName: {
        type: String
      },
      startDate: {
        type: Date,
      },
      endDate:{
          type:Date,
      },
      ip:{
          type:String,
      },
      id:{
          type:Number,
      }

  });

  var login_history = mongoose.model("login_history", nameSchema);
  module.exports=login_history;