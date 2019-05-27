var sql = require("mssql");
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var registrationModel = require('./registration.model');

function registration(){

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
    const pool= new sql.connect(config, function (err) {

        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        
    // ********************STEP 1***********

        // request.query('SELECT * FROM tblAdmin', async function (err, recordset) {

        //   request.query('SELECT * FROM tblRegistration', async function (err, recordset) {
        //     if (err) console.log(err)
            
        //     let totalusers = recordset.recordset.length;
        //     // console.log("Total users will be:",totalusers,recordset);
        //     for(let i=0;i<recordset.recordset.length;i++){
        //         let user = {};
        //         user.name=recordset.recordset[i].Name;
        //         user.email=recordset.recordset[i].EmailId;
        //         user.role=recordset.recordset[i].AuthorityType.toLowerCase();
        //         user.createdat=recordset.recordset[i].DateOfJoin;
        //         user.updatedDate=recordset.recordset[i].UpdatedDate;
        //         let hash_password = await bcrypt.hashSync(recordset.recordset[i].Password, 10);
        //         user.hash_password= hash_password;
        //         user.id=recordset.recordset[i].id;
        //         user.c= recordset.recordset[i].CreatedByID;
    
        //         var myData = new registrationModel(user);
        //         console.log(i+1,"users is inserted of ",totalusers,"users");
        //         await myData.save();
        //     }
        //     console.log("User Data inserted successfully");
        // });
    
    // **************Step2************

        // request.query('SELECT * FROM tblRegistration', async function (err, recordset) {
        //     if (err) console.log(err)
        //     for(let i=0;i<recordset.recordset.length;i++){
        //        var abc= await registrationModel.findOne({'id':recordset.recordset[i].CreatedByID});
        //     if(abc){
        //        let valueToUpdate = {"createdByID":(abc._id)?abc._id:""};
        //        var abcd= await registrationModel.findOneAndUpdate({'id':recordset.recordset[i].id},valueToUpdate);
           
        //     }
        //     }
        //     console.log("Data updated successfully");
        // });

        // });

    });
}

module.exports={
    registration
}