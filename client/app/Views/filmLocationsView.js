var FilmLocationsView = Backbone.View.extend({
	tagName: 'div',
	initialize: function(options) {
		this.map = options.map;
	},
	render: function()
	{
		var self = this;
		this.$el.children().detach();
		this.collection.map(function(item) {
			var marker_view = new FilmLocationMarkerView({ model: item, map: self.map });
			marker_view.render();
			var filmLocationView = new FilmLocationView({model: item, map: self.map});
			self.$el.append(filmLocationView.render());
		});

		return this.$el;
	}
});