define([
	'jquery'
], function(
	jQuery
) {
	
	var InstagramService = {

		clientID: "d61cbf45a1ae432f83d72a2fd954ad16",
		distance: "50000",
		
		init: function() {
			this.lat = geoplugin_latitude();
			this.lon = geoplugin_longitude();
		},

		getPhotos: function(callback) {
			var instagramURL = this.getInstaGramURL();
			$.ajax({
				url: instagramURL,
				dataType: "jsonp",
				success: function(data) {
					callback(data);
				}
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

	};

	InstagramService.init();

	return InstagramService;

});