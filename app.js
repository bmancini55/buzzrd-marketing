
// Dependencies
var express     = require('express')
  , serveStatic = require('serve-static')
  , hbs         = require('express-hbs')

// Locals
  , app = express();


// Add support for local files
app.use(serveStatic(__dirname + '/public'));

// Add support for Handlebars templating
app.engine('hbs', hbs.express3({ 
  defaultLayout: __dirname + '/views/layouts/main.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


// Create paths
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/support', function(req, res) {
  res.render('support');
});

app.get('/privacy', function(req, res) {
  res.render('privacy');
});

app.listen(5000);
