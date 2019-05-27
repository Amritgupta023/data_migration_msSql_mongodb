var sql = require("mssql");
var mongoose = require('mongoose');

var customer_connect_model = require('./customer_connect_data_model'); 
var customer_connect_file_model= require('./customer_connect_file_model');

function customer_connect(){

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
    const pool= new sql.connect(config, async function (err) {
    if (err) console.log(err);
    
    console.log("adding file data")
    await SavingFileDetails();
    console.log("File data added successfully");
    
    
    let customer_connect_length = await getLength();
    console.log("Data started counting",customer_connect_length);
    for(var i=0;i<Math.ceil(customer_connect_length/500);i++){
       await runQuery(i,customer_connect_length);
    }
    console.log("Data counted successfully");
});
}

function runQuery(i,totaal) {
    return new Promise((resolve, reject) => {
        var request = new sql.Request();
        request.query("select * from  tblInsightTool a ORDER BY a.id  OFFSET "+i*500+" ROWS FETCH NEXT 500 ROWS ONLY", async function (err, recordset) {
            if (err){
                console.log(err)
                reject();
            } 
                var length = await recordset.recordset.length;
                let dataSet = [];
                for(let data of recordset.recordset){
                    let tempObj = {};
                    for(let key in data){
                        tempObj[key] = data[key];     
                    }
                    dataSet.push(tempObj);
                }
                await customer_connect_model.insertMany(dataSet,function(error,doc){
                    if(error){
                        console.log(error);
                        reject();
                    }
                    else{
                        resolve();
                    }
                })
                console.log("The recordset will be:",i*500,"out of",totaal);
                // console.log(dataSet); 
        });
    })
}


function getLength(){
    return new Promise((resolve, reject) => {
        var request = new sql.Request();
        request.query("select * from  tblInsightTool a ORDER BY a.id", async function (err, recordset) {
            resolve(recordset.recordset.length);
        });
    });
}
function SavingFileDetails() {
    return new Promise((resolve, reject) => {
        var request = new sql.Request();
        request.query("select * from  tbl_GetFileUpload", async function (err, recordset) {
            if (err){
                console.log(err)
                reject();
            } 
            for(var i=0;i<recordset.recordset.length;i++){
                let body = {};
                body.createdAt = recordset.recordset[i].Date;
                body.originalFileName = recordset.recordset[i].FileNameWODate;
                body.savedFileName = recordset.recordset[i].FileName;
                body.recordsCount = recordset.recordset[i].NoofRecords;
                var myData = new customer_connect_file_model(body);
                var savedData = await myData.save();
                if(savedData){
                    resolve();
                }

            }
            



        });
    })
}
module.exports={
    customer_connect
}
