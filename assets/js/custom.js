//timer
$('#timer').countdown("2019/01/20", function(event) {
  //var totalHours = event.offset.totalDays * 24 + event.offset.hours;
  $(this).html(event.strftime( '<span>%D<small>Days</small></span> : <span>%H<small>Hour</small></span> : <span>%M<small>Minutes</small></span> : <span>%S<small>Seconds</small></span>'));
});





var myFunction = function runNext() {
    if ($("#section_2").hasClass("-in")) {
		setTimeout(function() {
            $( ".cb-navbar-logo img" ).attr('src','assets/img/header/logo_white.png');
            // $( ".cb-navbar-logo img" ).addClass( "logo_filter-white");
			
			$('#timer').countdown("2019/01/20", function(event) {
			  //var totalHours = event.offset.totalDays * 24 + event.offset.hours;
			  $(this).html(event.strftime( '<span>%D<small>Days</small></span> : <span>%H<small>Hour</small></span> : <span>%M<small>Minutes</small></span> : <span>%S<small>Seconds</small></span>'));
			});

			
        }, 1100); 
		
		$('#section_2 #white_svg path').addClass('white_svg');
		$('#section_2 #red_svg path').addClass('red_svg');
		
		//remove class
		$('#section_2 #white_svg path').removeClass('white_svg_out');
		$('#section_2 #red_svg path').removeClass('red_svg_out');
		
		
	}
	else if ($("#section_2").hasClass("-out")){
		$('#section_2 #white_svg path').addClass('white_svg_out');
		$('#section_2 #red_svg path').addClass('red_svg_out');
		
		//remove class
		$('#section_2 #white_svg path').removeClass('white_svg');
		$('#section_2 #red_svg path').removeClass('red_svg');
	}
	
	
	
	else if ($("#section_3").hasClass("-in")){
		setTimeout(function() {
             $( ".cb-navbar-logo img" ).attr('src','assets/img/header/logo_white.png');
            // $( ".cb-navbar-logo img" ).addClass( "logo_filter-white");
        }, 1100); 
		
	}
	else{
		 $( ".cb-navbar-logo img" ).attr('src','assets/img/header/logo_red.png');
	}
	
	
}
setInterval(myFunction, 10); // call every 1000 milliseconds

$('.cb-preview-fill').click(false);