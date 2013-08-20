define([
	'jquery',
	'backbone',
	'services/instagramService',
	'text!templates/photos/photoList.html'
], function(
	jQuery,
	Backbone,
	InstagramService,
	PhotosTemplate
) {

	var PhotosView = Backbone.View.extend({

		render: function() {
			this.tmplPhotos = _.template(PhotosTemplate);
			
			InstagramService.getPhotos($.proxy(function(data) {
				$("#main").html(this.tmplPhotos({ json: data }));
			}, this));
		}

	});

	return new PhotosView();
});