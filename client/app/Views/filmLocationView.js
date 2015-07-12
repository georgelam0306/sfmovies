var FilmLocationView = Backbone.View.extend({
	tagName:  "li",
	template: _.template('<%= title %><br><%= locations %><br><%= release_year %><br><%= production_company %><br><%= distributor %>'),
	initialize: function(options) {
		this.marker = options.marker;
	},
	render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },
});