var args = arguments[0] || {};

$.galleryButton.addEventListener('click', function() { 
	var options = { 
		success: function(e) { 
		 // fired when user selects from gallery 
		 // e.media == the image data
		 $.imageArea.image = e.media;
		}, 
		cancel: function() { 
		 // fired when user cancels 
		 alert(":(");
		}, 
		error: function(error) { 
		 // fired when there's an error 
		 // error.code is a constant, like Titanium.Media.NO_CAMERA 
		 alert("error \0/");
		}, 
		saveToPhotoGallery: false, 
		mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO, Ti.Media.MEDIA_TYPE_VIDEO]
	};
	Ti.Media.showCamera(options); 
});

