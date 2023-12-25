// Add this JavaScript file to your project

document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() { addFixedClass() };

    var navbar = document.querySelector("nav");
    var resumeLink = document.querySelector(".resume-link");

    function addFixedClass() {
        if (window.pageYOffset >= 100) {
            navbar.classList.add("fixed");
            resumeLink.classList.add("visible");
        } else {
            navbar.classList.remove("fixed");
            resumeLink.classList.remove("visible");
        }
    }
});
