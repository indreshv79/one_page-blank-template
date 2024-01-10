var $ = jQuery.noConflict();

jQuery(document).ready(function($){

$('.search-btn').click(function(){
  $('body').addClass('search-bar-open');
  return false;
})

$('.search-close-btn').click(function(){
  $('body').removeClass('search-bar-open');
  return false;
})

 

$('.grid-list').each(function () {
  liCount = $(this).children('li').length;
  if (liCount > 3) {
      $(this).addClass('addScroll');
  } 
});
 
/*==========================*/ 
/* sliders */ 
/*==========================*/
if($('._hero_slider').length > 0){
jQuery('._hero_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true, 
  infinite: true, 
  centerMode: false, 
   
});
}
 
/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.mobile-slider').length > 0){
jQuery('.mobile-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}
 
/*==========================*/	
/*  Menu */	
/*==========================*/
jQuery('.scroll').onePgaeNav({
  wrapper : '#onepage-nav',
  navStop: 0, 
  navStart: 10,

});

//  $(".navbar-nav li a").click(function (event) {
//   var toggle = $(".navbar-toggler").is(":visible");
//   if (toggle) {
//     $(".navbar-collapse").collapse('hide');
//   }
// });


/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});

 