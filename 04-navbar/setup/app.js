// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links")

navToggle.addEventListener('click', function () {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links")
    // }

    links.classList.toggle("show-links")
})