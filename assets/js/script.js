document.ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  (".navbar a, footer a[href='#myPage']").on('click', function(event) {
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
    document.getElementById("form").addEventListener("sendMail", sendMail);
    function sendMail(contactForm) {
    emailjs.send("gmail", "template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "enquiry_request": contactForm.enquirysummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
document.getElementById("touch").addEventListener("mouseover", mouseOver);
document.getElementById("touch").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("touch").textContent = "Error refer to contact tab above";
}

function mouseOut() {
  document.getElementById("touch").textContent = "Get in Touch";
}
});
});
