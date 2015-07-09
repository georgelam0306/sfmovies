var apiEndpoint = "https://data.sfgov.org/resource/yitu-d5am.json";
var async = require('async');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

module.exports = {
	get : function(cb) {
		request(apiEndpoint).spread(function(res,body) {
			cb(body);
		});
	}
}