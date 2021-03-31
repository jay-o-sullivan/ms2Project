$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  (".navbar a, footer a[href='#home']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      ('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {  // slide animation 
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
});
});



function sendMail(contactForm) {     // sending email contact form 
    emailjs.send("service_e1eyb28", "template", { 
        "from_name": contactForm.name.value,             // form values
        "from_email": contactForm.emailaddress.value,
        "enquiry_request": contactForm.enquirysummary.value
    })
    .then(
        function(response) {                            // response if email sends
            alert("Great! We'll be in touch!");
        },
        function(error) {                               // response if email fails
            alert("Oops, something went wrong.");
        }
    );
    return false;  // To block from loading a new page
}

$(document).ready(function(){

/*! Fades in page on load */
$('h1').css('display', 'none');
$('h1').fadeIn(1500);

$('#p1').css('display', 'none');
$('#p1').fadeIn(1500);

});
var animationSpeeds = {
  'tada': 1000,
  'tadaSmall': 1000,
  'flash': 500,
  'shake': 400,
  'pulseUp': 250,
  'pulseDown': 250,
  'popIn': 250,
  'popOut': 250,
  'fadeIn': 200,
  'fadeOut': 200
};

function animateEl(element, animation, complete)
{
  if (!element instanceof jQuery || !$(element).length || !animation) return null;
  
  if (element.data('animating')) {
    element.removeClass(element.data('animating')).data('animating', null);
    element.data('animationTimeout') && clearTimeout(element.data('animationTimeout'));
  }
  
  element.addClass('animated-' + animation).data('animating', 'animated-' + animation);
  element.data('animationTimeout', setTimeout((function() { element.removeClass(element.data('animating')).data('animating', null); complete && complete(); }), animationSpeeds[animation]));
}

function myFunction() {                 // confirm box 
  var txt;
  if (confirm("Add to cart!")) {
    txt = "You pressed OK!";        // if you press ok it will add to cart otherwise it says cancel
  } else {
    txt = "You pressed Cancel!";    
  }
  document.getElementById("panel-footer").innerHTML = txt;
}