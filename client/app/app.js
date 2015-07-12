$(function() {
	Backbone.history.start();
	new AppView().render().appendTo('body');
});