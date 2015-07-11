module.exports = {
	filmLocationsEndpoint : "https://data.sfgov.org/resource/yitu-d5am.json",
	maps: {
	  key: 'AIzaSyDcWblkDj5gY1_zFhFr_29svwr1ZYm1bnY',
	  stagger_time:       1000, // for elevationPath
	  encode_polylines:   false,
	  secure:             true, // use https
	  proxy:              'http://127.0.0.1:4568' // optional, set a proxy for HTTP requests
	}
}