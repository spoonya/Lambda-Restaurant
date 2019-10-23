let navToggle = $("#navToggle");
let nav = $("#nav");
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(this).scrollTop();

function checkScroll (scrollPos, introH) {
  if (scrollPos > introH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}

checkScroll(scrollPos, introH);

$(window).on("scroll resize", function () {
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();
  checkScroll(scrollPos, introH);
});

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
  let elId = $(this).data("scroll");
  let elOffset = $(elId).offset().top;
  nav.removeClass("show");

  $("html, body").animate( {
      scrollTop: elOffset + 1
    }, 500)
})

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
