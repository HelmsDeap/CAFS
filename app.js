var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", function(req, res){
     res.render("home");
     console.log("home page")
});

/*----------------------------------------------*/
/* SIDEBAR LINKS*/
/*----------------------------------------------*/

app.get("/history", function(req, res){
     res.render("history");
});

app.get("/accomplishments", function(req, res){
     res.render("accomplishments");
});

app.get("/legislativeWork", function(req, res){
     res.render("legislativeWork");
});

app.get("/brendaGarison", function(req, res){
     res.render("brendaGarison");
});

app.get("/ourFacility", function(req, res){
     res.render("ourFacility");
});

app.get("/communityEducation", function(req, res){
     res.render("communityEducation");
});

app.get("/helpfulResources", function(req, res){
     res.render("helpfulResources");
});

app.get("/victim", function(req, res){
     res.render("victim");
});

app.get("/yourRights", function(req, res){
     res.render("yourRights");
});

app.get("/someoneYouKnow", function(req, res){
     res.render("someoneYouKnow");
});

app.get("/rate", function(req, res){
     res.render("rate");
});

app.get("/impacted", function(req, res){
     res.render("impacted");
});

app.get("/effects", function(req, res){
     res.render("effects");
});

app.get("/warningSigns", function(req, res){
     res.render("warningSigns");
});

app.get("/howToRespond", function(req, res){
     res.render("howToRespond");
});

app.get("/howToProtect", function(req, res){
     res.render("howToProtect");
});

app.get("/forTeens", function(req, res){
     res.render("forTeens");
});

app.get("/sexOffenderFacts", function(req, res){
     res.render("sexOffenderFacts");
});

app.get("/reportCrime", function(req, res){
     res.render("reportCrime");
});

app.get("/whatToSay", function(req, res){
     res.render("whatToSay");
});

app.get("/2008Golf", function(req, res){
     res.render("2008Golf");
});

app.get("/2008Auction", function(req, res){
     res.render("2008Auction");
});

app.get("/2007Golf", function(req, res){
     res.render("2007Golf");
});

app.get("/2007Pageant", function(req, res){
     res.render("2007Pageant");
});

app.get("/2007Cafe", function(req, res){
     res.render("2007Cafe");
});




var port = process.env.PORT || 8080;
app.listen(port, function(){
     console.log("Server running on port " + port + "...")
});
