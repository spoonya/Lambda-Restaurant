/* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

   	slider.slick({
      autoplay: false,
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		fade: true,
  		arrows: true,
  		nextArrow: '<div class="next"> > </div>',
  		prevArrow: '<div class="prev"> < </div>',
	});
