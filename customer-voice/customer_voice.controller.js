var sql = require("mssql");
var mongoose = require('mongoose');

var customer_voice_model = require('./customer_voice.model');
var multipleSelect = require('./../shared/mulipleSelectData');

function customer_voice(){

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
    // create Request object
    var request = new sql.Request();


    request.query(`SELECT  a.[id]
    ,a.[AudioVideo]
    ,a.[CreatedDate],
    verbatimTheme = STUFF((
        SELECT ',' + c.VerbatimThemeId
        FROM  [UMSInsightTool].[dbo].[tblDetVerbatimTheme] c
        WHERE a.id = c.MasterId
        FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'), 1, 1, ''),
        b.MonthofStudyId,
        d.NationalityId,
        e.VerbatimSentimentId,
        f.Country,
        g.Year,
        h.CustomerSegment,
        i.StudyId as studyType
        FROM [UMSInsightTool].[dbo].[tblMasterAudioVideo] a
        left join [UMSInsightTool].[dbo].[tblDetMonthofStudy] b on a.id = b.MasterId
        left join [UMSInsightTool].[dbo].[tblDetNationality] d on a.id = d.MasterId
        left join [UMSInsightTool].[dbo].[tblDetVerbatimSentiment] e on a.id= e.MasterId
        left join [UMSInsightTool].[dbo].[tblDetCountry] f on a.id = f.MasterId
        left join [UMSInsightTool].[dbo].tblDetYear g on a.id = g.MasterId
        left join [UMSInsightTool].[dbo].[tblDetCustomerSegment] h on a.id = h.MasterId
        left join [UMSInsightTool].[dbo].[tblDetStudyTpe] i on a.id = i.MasterId
        `, async function (err, recordset) {
        if (err) console.log(err)

            // console.log("The recordset will be:",recordset.recordset[100]);
            let length = recordset.recordset.length;
            for(var i=0;i<recordset.recordset.length;i++){
                let body = {};
                body.customerSegment= changeData(stringToArray(recordset.recordset[i].CustomerSegment),'customerSegment');
                body.verbatimTheme = changeData(stringToArray(recordset.recordset[i].verbatimTheme),'verbatimTheme');
                body.nationality = changeData(stringToArray(recordset.recordset[i].NationalityId),'nationality');
                body.fileName = fileNameChange(recordset.recordset[i].AudioVideo);
                body.studyType= recordset.recordset[i].studyType;
                body.yearOfStudy = recordset.recordset[i].Year;
                body.monthOfStudy = recordset.recordset[i].MonthofStudyId;
                body.noOfMonth = changeData(stringToArray(recordset.recordset[i].MonthofStudyId),'month')[0];
                body.country = recordset.recordset[i].Country;
                body.fileType = checkFileType(recordset.recordset[i].AudioVideo);
                body.file= recordset.recordset[i].AudioVideo;
                body.verbatimSentiments= recordset.recordset[i].VerbatimSentimentId;

 
 
                var  myData = new customer_voice_model (body);
                let saved_Data = await myData.save();
                console.log("customer-voice",i+1,"of",length);
                    // function(error){
                    // if(error){
                    //     console.log("error in saving data");
                    //     // reject();
                    // } else {
                    //     // resolve('ff');
                    // }
                // });
            
         }
    });
});


}

function checkFileType(filename){
    if(filename != null){
        var fileExt = filename.split('.').pop();
        // console.log("The extension will be:",fileExt);
        if(fileExt == 'mp3'){
            return 'audio';
        }
        if(fileExt == 'mp4'){
            return 'video';
        }
    }
    if(filename == null){
        return null;
    }
   
}
function fileNameChange(file){
    if(file == null){
        return null;
    }
    else{
        if (file.indexOf(".") > 0){
            file = file.substring(0, file.lastIndexOf("."));
            return file;
        }
        
    }
    
}
function changeData(arr,type){
    let tempArray=[]
    if(type == 'customerSegment'){
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<multipleSelect.customerSegment.length;j++){
                if(arr[i]==multipleSelect.customerSegment[j].itemName){
                   tempArray.push(multipleSelect.customerSegment[j].value);
                }
            }
         }
    }
    if( type == 'verbatimTheme'){
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<multipleSelect.verbatimTheme.length;j++){
                if(arr[i]==multipleSelect.verbatimTheme[j].itemName){
                   tempArray.push(multipleSelect.verbatimTheme[j].value);
                }
            }
         }
    }
    if( type == 'nationality'){
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<multipleSelect.nationality.length;j++){
                if(arr[i]==multipleSelect.nationality[j].itemName){
                   tempArray.push(multipleSelect.nationality[j].value);
                }
            }
         }
    }
    if( type == 'month'){
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<multipleSelect.monthOfStudy.length;j++){
                if(arr[i]==multipleSelect.monthOfStudy[j].itemName){
                   tempArray.push(multipleSelect.monthOfStudy[j].id);
                }
            }
         }
    }
    return tempArray;
}

function stringToArray(str){
    if(str==null){
       return [];
    }
    else{
        var str_array = str.split(',');
        return str_array;
    }
    
}


module.exports={
    customer_voice
}
