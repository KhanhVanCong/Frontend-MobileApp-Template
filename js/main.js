const btnbackTop = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    btnbackTop.setAttribute("class", "active");
  } else {
    btnbackTop.setAttribute("class", "hidden");
  }
}


function backToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}