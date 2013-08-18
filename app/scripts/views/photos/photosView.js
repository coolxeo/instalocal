define([
	'backbone',
	'text!templates/photos/photoList.html'
], function(Backbone,
	PhotosTemplate) {

	var PhotosView = Backbone.View.extend({
		clientID: "d61cbf45a1ae432f83d72a2fd954ad16",
		distance: "50000",

		render: function() {
			this.tmplOut = _.template(PhotosTemplate);
			
			this.lat = geoplugin_latitude();
			this.lon = geoplugin_longitude();

			this.getInstaGramPhotos();
		},

		getInstaGramPhotos: function() {
			var instagramURL = this.getInstaGramURL();
			$.ajax({
				url: instagramURL,
				success: $.proxy(function(data) {
					$("#main").html(this.tmplOut({ json: data }));
				}, this),
				dataType: "jsonp"
			});
		},

		getInstaGramURL: function() {
			var url = "https://api.instagram.com/v1/media/search";
			url += "?client_id=" + this.clientID;
			url += "&lat=" + this.lat;
			url += "&lng=" + this.lon;
			url += "&distance=" + this.distance;

			return url;
		}

	});

	return new PhotosView();
});