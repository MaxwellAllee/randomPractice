require("dotenv").config();
var express = require("express");
//var exphbs = require("express-handlebars");
// var passport = require("./config/passport");
 var app = express();
 var server= require('http').createServer(app);
 var io= require('socket.io').listen(server);
var db = require("./models");

var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app,io);
require("./routes/htmlRoutes")(app)

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }
sendOut()
// Starting the server, syncing our models ------------------------------------/
function sendOut(){
io.on('connection', function(socket){
  
  
  
});
}
db.sequelize.sync(syncOptions).then(function() {
  server.listen(PORT, function() {
    console.log(
      "==> 🌋  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


module.exports = app;