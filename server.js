var express = require('express');
var app = express();
var mongoose = require('mongoose');

var registrationCtrl = require('./registration/registration.controller');
var loginHistoryCtrl = require('./login-history/login-history.controller');

mongoose.connect("mongodb://localhost:27017/hsbc");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(callback) {
     console.log("Connection succeeded.");
 });

setTimeout(()=>{

    // registrationCtrl.registration();
    loginHistoryCtrl.login_history();

},4000);

var server = app.listen(5000, function () {
    console.log('Server is running..');
});

