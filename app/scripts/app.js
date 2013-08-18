define([
	'jquery',
	'underscore',
	'backbone',
	'views/photos/photosView'
], function($, _, Backbone,
	photosView) {

	var App = Backbone.View.extend({

		initialize: function() {
			this.renderLayout();
		},

		renderLayout: function(){
			photosView.render();
		}

	});

	return App;
});