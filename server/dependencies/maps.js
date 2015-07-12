var geocoder = require("geocoder");

module.exports = function(config) {
	var mapLocationsCache = {}
	console.log(config);
	return {
			convertAddressToLocation : function(address, cb) {
				// geocode API
				if(mapLocationsCache[address])
				{
					cb(mapLocationsCache[address]);
					return;
				}

				geocoder.geocode(address, function(err, result) {
					if(err) {
						console.log(err);
						cb(null);
					}
					else {
						mapLocationsCache[address] = result;
					  cb(result);
					}
				}, {key: config.key});
		}
	}
}