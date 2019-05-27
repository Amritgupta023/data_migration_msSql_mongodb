var sql = require("mssql");
var mongoose = require('mongoose');

var market_intelligence_model = require("./market_intelligence.model");
var multipleSelect = require('./../shared/mulipleSelectData');


 function market_intelligence(){

    var config = {
    server: 'GSG1PD-GI0087',
    user: 'sa',
    password: 'Gemini@123',
    database: 'UMSInsightTool',
    
    options: {
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
    // console.log("The length will be:",findLength());
    let length = await findLength();

    for(var k=0;k<Math.ceil(length/200);k++){
     await runQuery(k,length);
    }
    console.log("Data inserted successfully");
});
}

function runQuery(k,totaal) {
    return new Promise((resolve, reject) => {
        var request = new sql.Request();
        request.query("SELECT  a.id, a.Image, a.News, a.Date, a.Comment, a.CreatedDate, b.VALUE as brandBanking, offerBanking = STUFF((SELECT ',' + c.VALUE FROM tblDetMarketOfferBanking c WHERE a.id = c.MasterId FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'), 1, 1, ''),productBanking = STUFF(( SELECT ',' + d.VALUE FROM  tblDetMarketProductBanking d  WHERE a.id = d.MasterId FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'), 1, 1, '') FROM tblMasterMarketDetail a LEFT JOIN tblDetMarketBrandBanking b ON a.id = b.MasterId ORDER BY a.id  OFFSET "+k*200+" ROWS FETCH NEXT 200 ROWS ONLY", async function (err, recordset) {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log("The",recordset.recordset.length*(k+1),"data inserted of",totaal);
            for(var i=0;i<recordset.recordset.length;i++){
                   let body = {};
                   body.date = recordset.recordset[i].Date;
                //    body.fileType = recordset.recordset[i].News;
                   if(recordset.recordset[i].News == "Advertisement"){
                       body.advertisement="true"
                   }
                   else{
                       body.advertisement = "false"
                   }
                   if(recordset.recordset[i].News == "New Articles"){
                    body.newArticle="true"
                    }
                   else{
                    body.newArticle = "false"
                   }
                     if(recordset.recordset[i].News == "Secondary Report"){
                    body.secondReport="true"
                   }
                   else{
                    body.secondReport = "false"
                    }

                   
    
                   body.brandBanking = changeData(recordset.recordset[i].brandBanking,'brandBanking');
                   body.productBanking = changeData(stringToArray(recordset.recordset[i].productBanking),'productBanking');
                   body.officeBanking = changeData(stringToArray(recordset.recordset[i].offerBanking),'offerBanking');
    
                   body.filename = recordset.recordset[i].Image;
                   body.docType = findDocType(recordset.recordset[i].Image),
                   body.comment = recordset.recordset[i].Comment;
                   body.createdDate = recordset.recordset[i].CreatedDate;
                   body.tempId = recordset.recordset[i].id;
    
    
                   var  myData = new market_intelligence_model (body);
                   let saved_Data = await myData.save(function(error){
                       if(error){
                           console.log("error in saving data");
                           reject();
                       } else {
                           resolve();
                       }
                   });
    
            }
        });
    });
}

 function findLength(){
     return new Promise((resolve,reject)=>{
        var request = new sql.Request();
        request.query("SELECT  a.id, a.Image, a.News, a.Date, a.Comment, a.CreatedDate, b.VALUE as brandBanking, offerBanking = STUFF((SELECT ',' + c.VALUE FROM tblDetMarketOfferBanking c WHERE a.id = c.MasterId FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'), 1, 1, ''),productBanking = STUFF(( SELECT ',' + d.VALUE FROM  tblDetMarketProductBanking d  WHERE a.id = d.MasterId FOR XML PATH(''), TYPE).value('.', 'NVARCHAR(MAX)'), 1, 1, '') FROM tblMasterMarketDetail a LEFT JOIN tblDetMarketBrandBanking b ON a.id = b.MasterId ORDER BY a.id", async function (err, recordset) {
            if (err) {
                console.log(err);
            }
            resolve(recordset.recordset.length);
        });
     })
    
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

function findDocType(str){
    let ext =  str.split('.').pop();
    if(ext=="JPG" || ext =="jpg" || ext == "png" || ext =="PNG"){
        return "image";
    }
    if(ext == "mp3"){
        return "audio";
    }
    if(ext == "mp4"){
        return "video";
    }
}

function changeData(arr,type){
    let tempArray=[]
    if(type =='brandBanking'){
            for(var j=0;j<multipleSelect.brandBanking.length;j++){
                if(arr==multipleSelect.brandBanking[j].itemName){
                   tempArray.push(multipleSelect.brandBanking[j].value);
                }
            }
    }
    if(type == 'productBanking'){
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<multipleSelect.productBanking.length;j++){
                if(arr[i]==multipleSelect.productBanking[j].itemName){
                   tempArray.push(multipleSelect.productBanking[j].value);
                }
            }
         }
    }
    if( type == 'offerBanking'){
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<multipleSelect.officeBanking.length;j++){
                if(arr[i]==multipleSelect.officeBanking[j].itemName){
                   tempArray.push(multipleSelect.officeBanking[j].value);
                }
            }
         }
    }
    return tempArray;
}
module.exports={
    market_intelligence
}

