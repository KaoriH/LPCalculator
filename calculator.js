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

  let loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;


  if (loveScore > 70) {
    comment = "You love each other like lovebirds.";
  }

  if (loveScore > 30 && loveScore <= 70) {
    comment = "You need to make an effort to keep a good relationship.";
  }

  if (loveScore <= 30) {
    comment = "You go together like oil and water.";
  }

  res.render("results", {
    loveResult: loveScore,
    loveComment: comment

  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});