var mysql = require('mysql');

var con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "macdonald"
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected....");
  var sql = "insert into employees (nom,prenom,email,tel) values('abdul','salim','abdul@yahoo.com','123456789'),('simo','jules','simo@yahoo.com','123456789')";

  con.query(sql, function(err, result){
    if(err) throw err;
    console.log("1 record inserted.....");
  });
});