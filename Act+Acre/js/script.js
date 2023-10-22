"use strict";

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Message add to card
function showSuccessMessage() {
    var successMessage = document.getElementById('success-message');

    // Prikazi poruku "Uspješno dodano"
    successMessage.style.opacity = 1;

    // Postepeno smanji opacity nakon 2 sekunde
    setTimeout(function() {
      successMessage.style.opacity = 0;
    }, 2000);
  }


//

function toggleContent(sectionId) {
    var content = document.getElementById(sectionId);
    var plusMinus = document.getElementById('plus-minus' + sectionId.charAt(sectionId.length-1));

    if (content.style.display === 'none') {
      content.style.display = 'block';
      plusMinus.textContent = '-';
    } else {
      content.style.display = 'none';
      plusMinus.textContent = '+';
    }
  }

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav-open")
});

document.querySelectorAll(".main-nav-link").forEach((n) => 
    n.addEventListener("click", () => {
        headerEl.classList.remove("nav-open");
    })
)