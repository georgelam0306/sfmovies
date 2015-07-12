var config = require('./config/config.js');
var web = require('./dependencies/webServer.js');
var maps = require('./dependencies/maps.js')(config.maps);
var filmLocation = require('./dependencies/filmLocation.js')(config.filmLocationsEndpoint, maps);
var express = require('express');
var app = express();
var apiRouter = express.Router();
var port = process.env.PORT || 4568;
var mapRoutes = require('./routes/mapRoutes.js');
var cors = require('cors');
app.use(cors());
app.use(web.bodyParser.json());
app.use(web.bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
mapRoutes(app, apiRouter, filmLocation);


app.listen(port);
filmLocation.cacheLocations(function(body) {
	console.log(body);
});

console.log('Server now listening on port ' + port);