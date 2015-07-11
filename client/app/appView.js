var AppView = Backbone.View.extend({
	childView : null,
	initialize: function() {
		console.log("initialize");
		
	},
	render: function()
	{
		// this.$el.children().detach();
		// return this.$el.append(this.childView.$el);
		this.$el.html('hello world');
		return this.$el;
	}
});