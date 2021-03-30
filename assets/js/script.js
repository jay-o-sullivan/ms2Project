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
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
});
});



function sendMail(contactForm) {
    emailjs.send("service_e1eyb28", "template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "enquiry_request": contactForm.enquirysummary.value
    })
    .then(
        function(response) {
            alert("Great! We'll be in touch!");
        },
        function(error) {
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
// all icons shake when button is clicked
$('#shake').click(function() {
  shake($('.col-sm-4'));
});

// all icons bounce when button is clicked
$('#bounce').click(function() {
  bounce($('.col-sm-4'));
});

// adaptable SHAKE function, from 
// https://bradleyhamilton.com/projects/shake/index.html 
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 6;

  for (var i = 0; i < (times + 1); i++) {
    $(thing).animate({
      left:
        (i % 2 == 0 ? distance : distance * -1)
    }, interval);
  }
  $(thing).animate({
    left: 0,
    top: 0
  }, interval);
}
// end SHAKE

// adaptable BOUNCE function, adapted from 
// http://stackoverflow.com/questions/10363671/jquery-bounce-effect-on-click-no-jquery-ui 
// code by "christian" 
function bounce(thing) {
  var interval = 100;
  var distance = 20;
  var times = 6;
  var damping = 0.8;

  for (var i = 0; i < (times + 1); i++) {
    var amt = Math.pow(-1, i) * distance / (i * damping);
    $(thing).animate({
      top: amt
    }, 100);
  }
  $(thing).animate({
    top: 0
  }, interval);
}
// end BOUNCE
