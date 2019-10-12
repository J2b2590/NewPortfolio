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
//     $(".dropdown-toggle").dropdown();
// });




// $('#btn-id').click(function(e){
//     e.stopPropagation()
// });

// $("document").ready(function(){
//   $("button").click(function(){
// 	  if($("button").text() == "✖"){
// 	  $("button").text("☰");
// 	}else{        
// 	  $("button").text("✖");      
// 	}
// 	$("li").toggle("slow");
//     });  
//   });


// $(document).ready(function(){
// 		    $('a[href^="#"]').on('click',function (e) {
// 		        e.preventDefault();
// 		        var target = this.hash;
// 		        $target = $(target);
// 		        console.log(this.hash, "haghs")
// 		        $('html, body').stop().animate({
// 		            'scrollTop':  $target.offset().top
// 		        }, 1200, 'swing', function () {
// 		            window.location.hash = target;
// 		        });
// 	    	});
// 		});

