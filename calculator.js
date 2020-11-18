//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});


app.post("/", function(req, res) {

  const name1 = req.body.na1;
  const name2 = req.body.na2;

  let loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;


  if (loveScore > 70) {
    comment = " love each other like lovebirds.";
    loveImageClass = "lovebirds";
  }

  if (loveScore > 30 && loveScore <= 70) {
    comment = " need to make an effort to keep a good relationship.";
    loveImageClass = "effort";
  }

  if (loveScore <= 30) {
    comment = " go together like oil and water.";
    loveImageClass = "oilwater";
  }

  res.render("results", {
    loveResult: loveScore,
    loveComment: name1 + " and " + name2 + comment,
    loveImage: loveImageClass
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
