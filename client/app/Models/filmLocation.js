var FilmLocation = Backbone.Model.extend({
	defaults : {
		title: 'The Organization',
		locations: '',
		geometry: {},
    release_year: '1971',
    production_company: 'The Mirisch Corporation',
    distributor: 'United Artists',
    writer: 'James R. Webb',
    director: 'Don Medford',
    actor_3: 'William Holden' 
	},
  initialize: function() {
  	console.log(this.attributes);
  }
});