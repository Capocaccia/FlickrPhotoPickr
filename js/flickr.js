
//1st attempt below
$(document).ready(function() {
 $('form').submit(function (evt) {
   evt.preventDefault();
   var $submitButton = $('submit');
   var $searchField = $('#search');
   $searchField.prop("disabled", true);
   $submitButton.attr("disabled", true).val("searching...");
   var searchKey = $searchField.val();
   var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
   var flickerOptions = {
     tags: searchKey,
     format: "json"
  };
   function displayPhotos(data) {
     var photoHTML = "<ul>";
     $.each ( data.items, function (i, photo) {
       photoHTML += '<li class="grid-25 tablet-grid-50">';
       photoHTML += '<a href="' + photo.link + '" class="image">';
       photoHTML += '<img src="'+photo.media.m +'"></a></li>';
     });
     photoHTML += '</ul>';
     $('#photos').html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");


    }
    $.getJSON(flickerAPI, flickerOptions, displayPhotos);
  }); // end click

}); // end ready
