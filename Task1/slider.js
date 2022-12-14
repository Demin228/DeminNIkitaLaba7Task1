const owl = $('.owl-carousel');
owl.owlCarousel({
  center:true,
  loop:true,
  items:1,
  nav:true,
  dots:false,
  touchDrag:true,
   navText:[
    '<img src="arrowPrev.svg" width="35" height="35">',
    '<img src="arrowNext.svg" width="35" height="35">'
   ]
});


