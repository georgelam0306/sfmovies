module.exports = function(app, router, filmLocation) {
	router.get('/fetch', function(req, res) {
		var location = {latitude: req.query.latitude, longitude: req.query.longitude}
		var range = req.query.range;
		var results = filmLocation.getClosestLocations(location, range, -1);
		res.json(results);
	});
}