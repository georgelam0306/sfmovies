var geocoder = require("geocoder");

module.exports = function(config) {
	var mapLocationsCache = {}
	return {
			convertAddressToLocation : function(address, cb) {
				// geocode API
				address += ", san francisco, california";
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
				});
		}
	}
}