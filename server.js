
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8082;

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

app.engine("handlebars", expressHandlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, console.log("go to http://localhost:"+PORT));
