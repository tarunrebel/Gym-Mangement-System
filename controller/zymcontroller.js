var bodyParser=require('body-parser');
var mysql = require('mysql'); 
var urlencodedParser=bodyParser.urlencoded({extended:false});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "college"
});

const multer  = require('multer')
const upload = multer({ dest: 'public/images/upload_images/' })

module.exports=function(app){


    app.get('/header',function(req,res)
      {
          
        res.render('header',{});
      });
      app.get('/footer',function(req,res)
      {
          
        res.render('footer',{});
      });
      app.get('/Home',function(req,res)
      {
          
        res.render('Home',{});
      });

  }