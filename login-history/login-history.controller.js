var sql = require("mssql");
var mongoose = require('mongoose');

var loginHistoryModelTemp = require('./login-history.temp.model');
var loginHistoryModel = require('./login-history.model');

function login_history(){

    var config = {
    server: 'GSG1PD-GI0087',
    user: 'sa',
    password: 'Gemini@123',
    database: 'UMSInsightTool',
    
    options: {
        // trustedConnection: true,
        port: 49175,
        encrypt: false,
        instanceName:'SQLExpress'
    }
};

    sql.close();
    // connect to your database
    const pool= new sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();


    request.query('SELECT * FROM tblLoginHistory', async function (err, recordset) {
        if (err) console.log(err)
        
        // for(let i=0;i<recordset.recordset.length;i++){
        //     let data = {};
        //     data.id=recordset.recordset[i].UserId;
        //     data.startDate = recordset.recordset[i].StartDate;
        //     data.endDate = recordset.recordset[i].EndDate;
        //     data.ip=recordset.recordset[i].IP;
        //     var myData = new loginHistoryModelTemp(data);
        //     let user = await myData.save();
        // }
        // console.log("temp Data saved successfully");





        // let users= await loginHistoryModelTemp.aggregate([
        //     {
        //         $lookup:
        //         {
        //             from:"registrations",
        //             localField:"id",
        //             foreignField:"id",
        //             as : "abc"
        //         }
        //     },
        //     {
        //       $unwind:
        //         {
        //           path:'$abc',
        //           preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     { $project : { "logInBy" : "$abc._id","id":1,"startDate":1,"endDate":1,"ip":1 } }
        // ]);

        // for(var i=0;i<users.length;i++){
        //     let myData = new loginHistoryModel(users[i]);
        //     let user = await myData.save();
        // }
        // console.log("Data added sucessfully");

    });
});

}

module.exports={
    login_history
}

