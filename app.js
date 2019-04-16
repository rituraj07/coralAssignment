var express = require("express");
var mysql = require('mysql');
var bodyParser = require("body-parser");
require('dotenv').config();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : process.env.host,
  user     : process.env.user,
  password : process.env.password,
  port : process.env.port,
  database:process.env.database
});
connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
    connection.query("SELECT * FROM userData", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
  });

app.post("/insert",function(req,res){
console.log(req.body.password);
var p=req.body.password;
let sqlq = "INSERT INTO userData(userName,emailId,phoneNo,password,dateTime) VALUES('"
+req.body.username
+"','"
+req.body.email
+"','"+
req.body.phone
+"','"
+p
+"','"
+req.body.dt
+"') ON DUPLICATE KEY UPDATE userName='"
+req.body.username
+"',password='"+req.body.password
+"',phoneNo='"+req.body.phone
+"',dateTime='"+req.body.dt
+"'";
  console.log(sqlq);
  connection.query(sqlq, function (err, result) {
    if (err) {
      res.status(404).json({msg:'Something went wrong'});  
      throw err;}
    res.status(200).json({msg:'Record added sucessfully'});
  });
});
app.get("/search",function(req,res){
  
  var sqlq ="SELECT * FROM userData WHERE emailId = '"+req.query.q+"'";
  connection.query(sqlq, function (err, result) {
    if (err) {
      res.status(404).json({msg:'Something went wrong'});  
      throw err;}
   // res.status(200).json({msg:'Search sucessful'});
    res.send(JSON.stringify(result));
  });

});
app.delete("/delete",function(req,res){
  var sqlq = "DELETE FROM userData WHERE emailId = '"+req.body.email+"'";
  connection.query(sqlq, function (err, result) {
    if (err) {
      res.status(404).json({msg:'Something went wrong'});  
      throw err;}
    res.status(200).json({msg:'Record with Email: '+req.body.email+' deleted sucessfully'});
  });
});
  app.listen(process.env.PORT || 3000);