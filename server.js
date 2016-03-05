var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
app.use(morgan("dev"));
var port = process.env.PORT || 8080;
var db = require('./config/db');
mongoose.connect(db.url);


app.use(bodyParser.json({limit: '50mb', type : 'application/json'}));
app.use(bodyParser.urlencoded({limit : '50mb',extended : true}));
app.use(express.static(__dirname+ "/public"));

require('./app/routes')(app);

app.listen(port);
console.log("Server started");
