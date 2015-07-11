var _ = require('underscore');
var async = require('async');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

module.exports = function(apiEndpoint, maps) {
	var mapLocations = [];
	return {
		isReady : false, //flag used to check if items are still being cached
		cacheLocations : function(cb) {
			//keep a cache of all mapLocations
			//return if the cache contains any items
			if(mapLocations.length > 0) {
				cb(mapLocations);
				return;
			}
			request(apiEndpoint).spread(function(res, body) {
				body = JSON.parse(body);
				async.eachSeries(body, function(item, callback) {
					maps.convertAddressToLocation(item.locations, function(res) {
						if(res.results.length > 0)
							item.locations = res.results[0].geometry;
					});
					//delay checks by 200ms to not go past geocode query limit
					setTimeout(callback, 200);
				}, function() {
					mapLocations = body;
					isReady = true;
					cb(body);
				})
		 });
		},
		updateCache: function(cb) {
			isReady = false;
			mapLocations = [];
			cacheLocations(cb);
		}
	}
}