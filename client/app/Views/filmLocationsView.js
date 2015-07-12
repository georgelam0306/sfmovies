var FilmLocationsView = Backbone.View.extend({

	initialize: function(options) {
		console.log(options)
		this.map = options.map;
	},
	render: function()
	{
		var self = this;
		return this.collection.map(function(item) {
			var marker_view = new FilmLocationMarkerView({ model: item, map: self.map });
			return marker_view.render();
		});
	}
});