

var sql = require("mssql");
var mongoose = require('mongoose');

var project_archive_model = require('./project_archive.model');
var registrations = require('./../registration/registration.model');

function project_archive(){

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


    request.query('SELECT * FROM tblStudyDetail', async function (err, recordset) {
        if (err) console.log(err)
        console.log("Data adding is in process please wait");
        let project_archive_length = recordset.recordset.length;

        for(let i=0;i<recordset.recordset.length;i++){
            let data ={};
            data.projectName=recordset.recordset[i].StudyName;
            data.year=recordset.recordset[i].YearOfStudy;
            data.projectType=recordset.recordset[i].ProjectType;
            data.productName=recordset.recordset[i].ProductName;
            data.month=recordset.recordset[i].MonthOfStydy;
            data.projectBackground=recordset.recordset[i].Notes;
            data.projectNature=recordset.recordset[i].StudyType;
            data.country=recordset.recordset[i].Country;

            data.filename1=[];
            data.filenameUuid1=[];
            data.filename2=[];
            data.filenameUuid2=[];
            data.filename3=[];
            data.filenameUuid3=[];
            data.filename4=[];
            data.filenameUuid4=[];
            data.filename5=[];
            data.filenameUuid5=[];

            data.createdDate=recordset.recordset[i].CreatedDate;
            data.updatedDate=recordset.recordset[i].UpdatedDate;

            let temp1 = await registrations.findOne({"id":recordset.recordset[i].CreatedByID});
            data.createdById = temp1._id;
            let temp2 = await registrations.findOne({"id":recordset.recordset[i].UpdatedByID});
            data.updatedById= temp2._id;

            data.loginById = recordset.recordset[i].LoginID;
            data.fileId = recordset.recordset[i].Id;

            // console.log("The data will be:",data);
            
            request.query('SELECT * FROM tblFileDocument', async function (err, recordset1) {
                if (err) console.log(err)

                for(let j=0;j<recordset1.recordset.length;j++){

                    if(data.fileId==recordset1.recordset[j].StudyDetailId){
                       if(recordset1.recordset[j].FieldName=="Quantitative Proposal"){
                             data.filename1.push(recordset1.recordset[j].FileName);
                             data.filenameUuid1.push(recordset1.recordset[j].FilePath);
                       }
                       if(recordset1.recordset[j].FieldName=="Quantitative PPT"){
                        data.filename2.push(recordset1.recordset[j].FileName);
                        data.filenameUuid2.push(recordset1.recordset[j].FilePath);
                       }
                       if(recordset1.recordset[j].FieldName=="Quantitative Questionnaire"){
                        data.filename3.push(recordset1.recordset[j].FileName);
                        data.filenameUuid3.push(recordset1.recordset[j].FilePath);

                       }
                       if(recordset1.recordset[j].FieldName=="Quantitative Request"){
                           data.filename4.push(recordset1.recordset[j].FileName);
                           data.filenameUuid4.push(recordset1.recordset[j].FilePath);

                       }
                       if(recordset1.recordset[j].FieldName=="Quantitative Materials"){
                        data.filename5.push(recordset1.recordset[j].FileName);
                        data.filenameUuid5.push(recordset1.recordset[j].FilePath);
                       }
                    }
                }

                var myData = new project_archive_model(data);   
                var savedUser =  await myData.save();
                // console.log("The saved user will be:",savedUser);
            });
            console.log("The project_archive_length",i,"of",project_archive_length);
            
        }
        console.log("Data added successully..");
    });
});

}

module.exports={
    project_archive
}