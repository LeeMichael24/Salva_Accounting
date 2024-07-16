(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter
     document.addEventListener('DOMContentLoaded', function () {
        function animateCounters() {
            $('.counter-value').each(function(){
                var $this = $(this),
                    countTo = $this.text().replace(/[^0-9.]/g, ''); // Include decimal points
    
                $this.prop('Counter', 0).animate({
                    Counter: countTo
                },{
                    duration: 4000,
                    easing: 'easeInQuad',
                    step: function (now){
                        $this.text(parseFloat(now).toFixed(1) + $this.data('suffix')); // Ensure one decimal place
                    }
                });
            });
        }
    
        // Intersection Observer setup
        let observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 // Adjust this threshold as needed
        };
    
        let observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, observerOptions);
    
        let countersSection = document.querySelector('.counters-section');
        if (countersSection) {
            observer.observe(countersSection);
        }
    });
    
    


})(jQuery);

