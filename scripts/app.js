console.log("connected")

//Color transistion 
$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 50 ){
    
 		$('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
 	};   	
});





// $(document).ready(function() {
// 	$("#projButtonShow").click(function() {	
// 	console.log("am I clicked?")
//     $('html,body').animate({
//         scrollTop: $("#showProj").offset().top},
//         'slow');
// 	});	
// });

// $(document).ready(function() {
// 	$("#projButtonShow").click(function() {

// 		if (this.id == "home") {
//          $("#projButtonShow").addClass('fixed');
//         } else {
//          $("#home").addClass('fixed');
//        }

// 	});
	
// });



$('#carousel').carousel({
	interval: false
});

 

$(document).ready(function(){
		    $('a[href^="#"]').on('click',function (e) {
		        e.preventDefault();
		        var target = this.hash;
		        $target = $(target);
		        console.log(this.hash, "haghs")
		        $('html, body').stop().animate({
		            'scrollTop':  $target.offset().top
		        }, 1200, 'swing', function () {
		            window.location.hash = target;
		        });
	    	});
		});

