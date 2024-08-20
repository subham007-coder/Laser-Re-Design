

$(function() {
  // Owl Carousel
  var owl = $("#owl-demo");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    autoplay:true, 
    loop: true,
    nav: false,
    dots:true,
    animateOut: 'fadeOut'
  });


  var owl = $("#owl-demoTwo");
  owl.owlCarousel({
    items: 4,
    margin: 25,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:5
            }
        }
  });

  var owl = $("#owl-demoThree");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    autoplay:true, 
    loop: true,
    nav: false,
    dots:true,
    animateOut: 'fadeOut'
  });

   var owl = $("#owl-demoFour");
  owl.owlCarousel({
    items: 4,
    margin: 25,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
  });

  var owl = $("#owl-demoFive");
  owl.owlCarousel({
    items: 4,
    margin: 25,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:4   
            },
            1000:{
                items:5
            }
        }
  });

  var owl = $("#owl-demoSix");
  owl.owlCarousel({
    items: 4,
    margin: 25,
    autoplay:false, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
  });

   var owl = $("#owl-demoSeven");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-left'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
  });


   var owl = $("#owl-demoEight");
  owl.owlCarousel({
    items: 4,
    margin: 15,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
  });

   var owl = $("#owl-demoNine");
  owl.owlCarousel({
    items: 4,
    margin: 15,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
  });

  var owl = $("#owl-demoTen");
  owl.owlCarousel({
    items: 4,
    margin: 15,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
  });

   var owl = $("#owl-demoEleven");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    autoplay:true, 
    loop: true,
    nav: false,
    dots:true,
    animateOut: 'fadeOut'
  });

  var owl = $("#owl-demoTwelve");
  owl.owlCarousel({
    items: 4,
    margin: 15,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
  });

   var owl = $("#owl-demoThirteen");
  owl.owlCarousel({
    items: 4,
    margin: 25,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:4   
            },
            1000:{
                items:5
            }
        }
  });

  var owl = $("#owl-demoFourteen");
  owl.owlCarousel({
    items: 4,
    margin: 25,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:2   
            },
            1000:{
                items:3
            }
        }
  });

  var owl = $("#owl-demoFifteen");
  owl.owlCarousel({
    items: 4,
    margin: 25,
    autoplay:true, 
    loop: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots:false,
    responsive:{
            0:{
                items:1,
                rows: 2
            },
            600:{
                items:4,
                rows: 3 
            },
            1000:{
                items:3,
                rows: 3
            }
        }
  });


 

});




// Mob Menu
$('#openNav').on('click', function() {
  $('#myNav').css("width", "100%");
});

$('#closeNav').on('click', function() {
  $('#myNav').css("width", "0%");
});


// ----Search----
$(document).ready(function(){
  $(".fa-search").click(function() {
       $(".togglesearch").toggle();
       $("input[type='text']").focus();
     }); 

  $('.bg-moving').bgscroll({scrollSpeed:20 , direction:'h' });

  $(".journey-cont ul li.box").mouseover(function () {
        $(".box").removeClass("active");
        $(this).addClass("active");
    });
  
});

AOS.init({
  duration: 1200,
  disable: window.innerWidth < 992
})





//________graph images moving function by = jquery.bgscroll.js  ________//  
    function bg_moving(){
        jQuery( function() {              
        jQuery('.bg-moving').bgscroll({scrollSpeed:20 , direction:'h' });
        });
    }

 /* Preloader
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);


// Video Carousal
        $(".video-thumb").click(function() {
          $('.video-thumb > img').removeClass("active");
          $(this).children('img').addClass("active");
        });

        $('div.video-thumb').click(function() {
          $('.video-iframe iframe').attr('src', ($(this).children('iframe').attr('src').replace('iframe')));
        });

// About Map
 $('.statecontent').hide();
    $('label').hide();
    $('.state').bind('mouseover', function() {
        // alert('hi');
        $('label.statecontent').hide();
        $('#'+$(this).attr('id')+'content').show();
    }); 

$('.countrycontent').hide();
    $('label').hide();
    $('.country').bind('mouseover', function() {
        // alert('hi');
        $('label.countrycontent').hide();
        $('#'+$(this).attr('id')+'content').show();
    });


$('#slick1').slick({
        rows: 3,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,  
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",    
        responsive: [
        {
            breakpoint: 1024, // tablet breakpoint
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 768, // tablet breakpoint
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 481, // mobile breakpoint
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});

$('#slick2').slick({
        rows: 3,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,  
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",    
        responsive: [
        {
            breakpoint: 1024, // tablet breakpoint
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 768, // tablet breakpoint
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 481, // mobile breakpoint
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});


$('#slick3').slick({
        rows: 3,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,  
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",    
        responsive: [
        {
            breakpoint: 1024, // tablet breakpoint
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 768, // tablet breakpoint
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 481, // mobile breakpoint
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});



$('.cloud-zoom').each(function(){
  $(this).data('zoom').destroy();
});