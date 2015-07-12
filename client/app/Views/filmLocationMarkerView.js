var FilmLocationMarkerView = Backbone.View.extend({
  initialize: function(options) {
      this.model = options.model;

      var geometry = this.model.get('geometry');

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

        this.displayInfo = false;
        google.maps.event.addListener(this.marker, 'click', this.showInfo);
      }
    },
    showInfo : function() {
      if(!this.displayInfo) {
        this.displayInfo = true;
        this.infowindow.open(this.map, this);
      }
      else {
        this.displayInfo = false;
        this.infowindow.close();
      }
    },

    render: function() {
    },
    remove : function() {
      if(this.marker) {
        this.marker.setMap(null);
        this.marker = null;
      }
    }
});
