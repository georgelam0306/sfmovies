var FilmLocationMarkerView = Backbone.View.extend({
  initialize: function(options) {
      console.log(options);

      this.model = options.model;

      var geometry = this.model.get('geometry');
      console.log(geometry);

      if(geometry) {
        this.model.on('remove', this.remove, this);

        this.map = options.map;


        this.marker = new google.maps.Marker({
            map: this.map,
            position: new google.maps.LatLng(geometry.location.lat, geometry.location.lng),
            title: this.model.get('title'),
            descr : this.model.get('production_company'),
            id : this.model.get('cid')
        });

        this.marker.infowindow = new google.maps.InfoWindow({
          content: this.marker.descr
        });

        google.maps.event.addListener(this.marker, 'click', self.show_company_detail);
      }
    },

    //---------------------------------------
    // Event handlers for marker events

    show_company_info : function() {
      this.infowindow.open(this.map, this);
    },

    render: function() {
      return this.$el;
    }
});
