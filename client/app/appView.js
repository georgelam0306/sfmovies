var AppView = Backbone.View.extend({
	initializeMap : function() {
    var center = new google.maps.LatLng(41.63, -1);
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
        zoom: 9,
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
    filmLocations.fetch({success: function() {
      console.log(filmLocations)
    }});
		
	},
	render: function()
	{
		return this.$el;
	}
});