let navToggle = $("#navToggle");
let nav = $("#nav");

/*Burger*/
navToggle.on("click", function (event) {
  event.preventDefault();
  nav.toggleClass('show');
})

/* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

   	slider.slick({
      	autoplay:  true,
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		fade: true,
  		arrows: true,
  		nextArrow: '<div class="next"> > </div>',
  		prevArrow: '<div class="prev"> < </div>',
	});
