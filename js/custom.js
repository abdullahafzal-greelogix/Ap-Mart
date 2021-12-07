
var wow = new WOW(
{
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
  );
wow.init();




function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) { 
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
}





function up(max) {
  document.getElementById("myNumber-two").value = parseInt(document.getElementById("myNumber-two").value) + 1;
  if (document.getElementById("myNumber-two").value >= parseInt(max)) {
    document.getElementById("myNumber-two").value = max;
  }
}
function down(min) {
  document.getElementById("myNumber-two").value = parseInt(document.getElementById("myNumber-two").value) - 1;
  if (document.getElementById("myNumber-two").value <= parseInt(min)) {
    document.getElementById("myNumber-two").value = min;
  }
}




function up(max) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
  if (document.getElementById("myNumber").value >= parseInt(max)) {
    document.getElementById("myNumber").value = max;
  }
}
function down(min) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
  if (document.getElementById("myNumber").value <= parseInt(min)) {
    document.getElementById("myNumber").value = min;
  }
}






$(window).scroll(function() {
  var distanceFromTop = $(this).scrollTop();
  if (distanceFromTop >= $('#sticky').height()) {
    $('#sticky').addClass('fixed');
    $('#sticky').slideDown(500);
  } else {
    $('#sticky').hide();
    $('#sticky').removeClass('fixed');
  }
});




function openNav() {
  document.getElementById("mySidenav").style.width = "540px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



$(window).load(function() {
  $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
})





var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});