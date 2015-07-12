var FilmLocationsMarkerView = Backbone.View.extend({
  tagName:  "li",
  initialize: function(options) {
    
      this.model = options.model;
      this.model.on('remove', this.remove, this);

      this.map = options.map;

      var pos = this.model.get('pos');

      this.marker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(pos.lat, pos.lon),
          title: this.model.name,
          descr : this.model.get('descr'),
          id : this.model.get('company_id')
      });

      this.marker.infowindow = new google.maps.InfoWindow({
        content: this.marker.descr
      });

      google.maps.event.addListener(this.marker, 'click', self.show_company_detail);
    },

    //---------------------------------------
    // Event handlers for marker events

    show_company_info : function() {
      this.infowindow.open(this.map, this);
    },
    
  },
  render: function()
  {
    return this.$el;
  }
});
