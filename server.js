var express = require('express');
var app = express();
var mongoose = require('mongoose');

var registrationCtrl = require('./registration/registration.controller');
var loginHistoryCtrl = require('./login-history/login-history.controller');
var project_archiveCtrl = require('./project-archive/project_archive.controller');
var market_intelligenceCtrl = require('./market-intelligence/market_intelligence.controller');
var customer_voice = require('./customer-voice/customer_voice.controller');
var customer_connect = require('./customer-connect/customer_connect.controller');


mongoose.connect("mongodb://localhost:27017/hsbc");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(callback) {
     console.log("Connection succeeded.");
 });

setTimeout(()=>{

    // registrationCtrl.registration();
    // loginHistoryCtrl.login_history();
    // project_archiveCtrl.project_archive();
    // market_intelligenceCtrl.market_intelligence();
    // customer_voice.customer_voice();
    customer_connect.customer_connect();






},4000);

var server = app.listen(5000, function () {
    console.log('Server is running..');
});

