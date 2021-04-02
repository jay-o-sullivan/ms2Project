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
$('h1').fadeIn(3000);


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


// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
// Initialize and add the map
      function initMap() {
        // The location of limerick
        const limerick = { lat: 52.668018, lng: -8.630498 };
        // The map, centered at limerick
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: limerick,
        });
        // The marker, positioned at limerick
        const marker = new google.maps.Marker({
          position: limerick,
          map: map,
        });
      }
