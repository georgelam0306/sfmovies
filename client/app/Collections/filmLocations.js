var FilmLocations = Backbone.Collection.extend({
		url: "/api/fetchAll",
    model: FilmLocation,
    initialize : function() {
    	console.log("initialized");
    },
	  search : function(letters){
			if(letters == "") return this;
	 
			var pattern = new RegExp(letters,"gi");
			return _(this.filter(function(data) {
			  	return pattern.test(data.get("title"));
			}));
		}
});