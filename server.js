var express = require("express");
var path = require('path');

var PORT = process.env.PORT || 8081;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/books", function(req, res) {
    res.sendFile(path.join(__dirname, "books.html"));
    });
app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "contact.html"));
    });
app.get("/drawings", function(req, res) {
    res.sendFile(path.join(__dirname, "drawings.html"));
    });
app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "about.html"));
    });
// taken out so I dont receive emails on test
app.post("/form", function(req, res){

  var sendmail = require('sendmail')();
  sendmail({
      from: req.body.userEmail,
      to: 'creepybutcutepress@gmail.com',
      subject: req.body.userSubject,
      html: req.body.userText,
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  //Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});