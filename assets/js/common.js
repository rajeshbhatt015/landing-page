var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    dots:false,
    loop:true,
    smartSpeed: 700,
    autoHeight: true,

});
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
