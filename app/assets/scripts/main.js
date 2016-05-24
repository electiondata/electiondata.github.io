console.log("wow!");

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


// //<i class='ico icon collecticon-chevron-right'></i>
// function openNav() {
//     document.getElementById("mySidenav").style.left = "0";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }
