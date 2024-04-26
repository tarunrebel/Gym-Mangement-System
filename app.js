var express=require('express');
var zymcontroller=require('./controller/zymcontroller');
var app=express(),
fileUpload = require('express-fileupload');
const path = require("path");
const multer = require("multer");
var session = require('express-session');
//var express = require('express');
//var app = express();
bodyParser=require("body-parser");
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

//set up a template engine

app.set('view engine','ejs');

// static files

app.use(express.static('./public'));

//fire controller
zymcontroller(app);
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// listen to port

app.listen(3000);

console.log('your are listening to port 3000');
