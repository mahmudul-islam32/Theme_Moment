(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        $( ".menu-show" ).click(function() {
			$(".offcanvas-area").css('margin-left','-300px');
			$(".side-menu-wrap").css('right','0').addClass('animated bounceIn');
			$(this).hide();
        
    
       });
		
        $( ".menu-cross,.body" ).click(function() {
			$(".offcanvas-area").css('margin-left','0');
			$(".side-menu-wrap").css('right','-300px').removeClass('animated bounceIn');
			$(".menu-show").show();
        
    
       });
		
		$('.paralax-bg').parallax("50%", 0.1);
		
		
			
        $('#portfolio').mixItUp({
		
		animation :{
		
		 enable:true,
		 effects:'fade rotateZ',
		 duration:600	
		},
		
		});
		
		

  

		$("a[rel^='prettyPhoto']").prettyPhoto();
		
		
		$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 5},1500);
		return false;
	});
	
});



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	