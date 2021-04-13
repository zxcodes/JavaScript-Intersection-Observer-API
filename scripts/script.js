// Get the element that needs to be observed.
let section = document.querySelector(".section-2");

// Get the element that you want to manipulate.
let nav = document.getElementById("nav");

// Providing no options will use API's default options.
let options = {
  root: null,
  threshold: 0.5, //The amount of element's area visible on the viewport.
  rootMargin: "0px", //The margin around the  root.
};

// Create a new observer.
let observer = new IntersectionObserver(classAdder, options);

// Create a callback function which will be fired once the target element will be visible on the viewport.
function classAdder(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.toggle("nav");
    } else {
      nav.classList.remove("nav");
    }
  });
}
// Telling the observer to observe the target element.
observer.observe(section);
