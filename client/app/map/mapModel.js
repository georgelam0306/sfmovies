var MapModel = Backbone.Model.extend({
    defaults: {
    "locations":  []
  },

  intialize : function () {
  },

  updateLocation : function() {
    this.trigger('updateLocation', this);
  }
});