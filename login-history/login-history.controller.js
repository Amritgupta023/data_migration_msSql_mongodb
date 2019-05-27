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


    request.query(`SELECT a.UserId
                   ,a.StartDate
                   ,a.EndDate
                   ,a.IP,
                   b.Name
                   FROM [UMSInsightTool].[dbo].[tblLoginHistory] a
                   left join [UMSInsightTool].[dbo].[tblRegistration] b on a.UserId = b.id`, async function (err, recordset) {
        if (err) console.log(err)

        // console.log("The length will be:",recordset.recordset[5]);
        // *******************Step1*****************************


        // let loginHistoryLength = recordset.recordset.length;
        // for(let i=0;i<recordset.recordset.length;i++){
        //     let data = {};
        //     data.id=recordset.recordset[i].UserId;
        //     data.loginAt = recordset.recordset[i].StartDate;
        //     data.endDate = recordset.recordset[i].EndDate;
        //     data.ip=recordset.recordset[i].IP;
        //     data.userName = recordset.recordset[i].Name;
        //     var myData = new loginHistoryModelTemp(data);
        //     let user = await myData.save();
        //     console.log("Login HIstory temp",i,"of loginHistoryLength",loginHistoryLength);
        // }
        // console.log("temp Data saved successfully");




        // *********************Step 2************

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
        //     { $project : { "logInBy" : "$abc._id","id":1,"loginAt":1,"endDate":1,"ip":1,"userName":1 } }
        // ]);
        // let loginHistoryLength = users.length;
        // for(var i=0;i<users.length;i++){
        //     let myData = new loginHistoryModel(users[i]);
        //     let user = await myData.save();
        //     console.log("Login HIstory temp",i,"of loginHistoryLength",loginHistoryLength);
        // }
        // console.log("Data added sucessfully");

    });
});

}

module.exports={
    login_history
}

