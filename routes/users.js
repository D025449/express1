var express = require('express');
var router = express.Router();

var mysql = require('mysql2');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const con = mysql.createConnection({
    //url: "localhost:3306/cycling_db",
    host: "localhost",
    port: 3306,
    insecureAuth: true,
    database: "cycling_db",
    user: "cyclingdbuser",
    password: "Bikes001!"
  });
  con.connect(function(err) {
    if (err)
    {
      console.log(err)
    }else {
      console.log("Connected!");
    }
  });

  con.query(
      'SELECT email FROM cuser',
      function(err, results) {
        console.log(results);
        res.send(results);
      });

  con.end( );
  //res.send('respond with a resource');
});



module.exports = router;
