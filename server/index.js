var config = require('./config/config.js');
var web = require('./dependencies/webServer.js');
var maps = require('./dependencies/maps.js')(config.maps);
var filmLocation = require('./dependencies/filmLocation.js')(config.filmLocationsEndpoint, maps);
var app = web.express();
var port = process.env.PORT || 4568;
app.use(web.bodyParser.json());
app.use(web.bodyParser.urlencoded({ extended: true }));


app.listen( port);
filmLocation.cacheLocations(function(body) {
	console.log(body);
});

console.log('Server now listening on port ' + port);