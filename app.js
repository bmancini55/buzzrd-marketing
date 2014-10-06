
// Dependencies
var express     = require('express')
  , serveStatic = require('serve-static')

// Locals
  , app = express();


// Add support for local files
app.use(serveStatic(__dirname + '/public'));


// Create paths
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/support', function(req, res) {
  res.sendFile(__dirname + '/views/support.html');
});

app.get('/privacy', function(req, res) {
  res.sendFile(__dirname + '/views/privacy.html');
});

app.listen(5000);
