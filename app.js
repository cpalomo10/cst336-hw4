const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var fakeData = require("faker");
var randomWord = faker.random.word();

app.get("/", function(req,res) {
        res.render("index.html", {"variableName":randomWord});
        });

app.get("/index", function(req,res) {
        res.render("index.html", {"variableName":randomWord});
        });

app.get("/linux", function(req,res) {
        res.render("linux.html");
        })

app.get("/macOS", function(req,res) {
        res.render("macOS.html");
        })

app.get("/windows", function(req,res) {
        res.render("windows.html");
        })

//listener
app.listen(process.env.PORT, process.env.IP, function () {
           console.log("Running Express Server...")
           });

