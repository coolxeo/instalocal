define([
	'jquery',
	'backbone',
	'models/photo.js'
], function(
	jQuery,
	Backbone,
	PhotoModel
) {

	var Photos = Backbone.Collection.extend({
		model: PhotoModel
	});

	return Photos;

});