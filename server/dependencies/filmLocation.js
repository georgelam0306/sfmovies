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
						console.log(res);
						if(res && res.results.length > 0) {
							console.log(res);
							item.geometry = res.results[0].geometry;
						}
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
		},
		getAllLocations: function() {
			console.log("Get all locations");
			return mapLocations;
		},
		getClosestLocations : function(location, range, maxResults) {
			//todo: sort items from closest to furthest, memoize, and return a range of items for optimization
			var sqrMag, sqrRange, count;
			if(!this.isReady) {
				return null;
			}

			sqrMag = function(pos1, pos2) {
				return Math.pow(pos2.longitude + pos1.longitude, 2) + Math.pow(pos2.latitude + pos.latitude, 2);
			}

			sqrRange = range * range;
			count = 0;
			return _.map(mapLocations, function(item) {
				if(maxResults !== -1 && count < maxResults) {
					if(sqrMag(item.geometry.location, location) < range) {
						count++;
						return item;
					}
				}
			});
		}
	}
}