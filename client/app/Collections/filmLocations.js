var FilmLocations = Backbone.Collection.extend({
		url: "http://127.0.0.1:4568/api/fetchAll",
    model: FilmLocation,
    initialize : function() {
    	console.log("initialized");
    },
    add_new: function(filmLocation) {
    	console.log(filmLocation);
    	this.create(filmLocation);
  },
});