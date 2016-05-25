// import jQuery and set up definitions of it for flexslider js.
global.$ = global.jQuery = global.jquery = require('jquery');
require('jquery-flexslider');

// Call flexslider
$(window).load(function() {
  $('.flexslider').flexslider({
		directionNav: true,
  	prevText: "Previous Steps",
  	nextText: "Next Steps",
  	slideshowSpeed: 6000,
  });
});
