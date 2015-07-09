var web = require('./dependencies/webServer.js');
var filmLocation = require('./dependencies/filmLocation.js');
var app = web.express();
var port = process.env.PORT || 4568;
app.use(web.bodyParser.json());
app.use(web.bodyParser.urlencoded({ extended: true }));


app.listen( port);
filmLocation.get(function(res) {

});

console.log('Server now listening on port ' + port);