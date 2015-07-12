var FilmLocations = Backbone.Collection.extend({
		url: "http://127.0.0.1:4568/api/fetchAll",
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