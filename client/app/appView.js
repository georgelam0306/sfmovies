var AppView = Backbone.View.extend({
	initializeMap : function() {
    var center = new google.maps.LatLng(37.7881209, -122.3954958);
    var styles = [
      {
        elementType: "geometry",
        stylers: [
          { lightness: 33 },
          { saturation: -90 }
        ]
      }
    ];

    var mapOptions = {
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center,
        styles: styles
    };
    this.map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);
  },
	initialize: function() {
		this.initializeMap();
    var filmLocations = new FilmLocations();
    var self = this;
    filmLocations.fetch({success: function() {
      console.log(filmLocations);
      filmLocationsView = new FilmLocationsView({collection: filmLocations, map: self.map});
      filmLocationsView.render();
    }});
	},
	render: function()
	{
		//return this.$el;
	}
});