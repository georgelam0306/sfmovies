var FilmLocationsView = Backbone.View.extend({
	tagName: 'div',
	events: {
		"keyup #searchBox" : "search",
	},
	initialize: function(options) {
		this.map = options.map;
		this.markers = [];
	},
	render: function()
	{
		this.$el.html('<input id="searchBox" type="text" value=""><div id="container"></div>');
		return this.$el;
	},
	renderList: function(list) {
		var self = this;
		this.$el.find("#container").children().detach();
		_.each(self.markers, function(item) {
			item.remove();
		})
		list.each(function(item) {
			var marker_view = new FilmLocationMarkerView({ model: item, map: self.map });
			marker_view.render();
			self.markers.push(marker_view);
			var filmLocationView = new FilmLocationView({model: item, map: self.map, marker: marker_view});
			self.$el.find("#container").append(filmLocationView.render());
		});
	},
	search: function(e){
		var letters = $("#searchBox").val();
		this.renderList(this.collection.search(letters));
	},
});