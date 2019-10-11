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



function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);











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

