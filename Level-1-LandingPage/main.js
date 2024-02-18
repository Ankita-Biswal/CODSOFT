const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
//header Container
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_btn", {
  ...scrollRevealOption,
  delay: 1000,
});
//information container
ScrollReveal().reveal(".information_card", {
  ...scrollRevealOption,
  interval: 500,
});
//testmonial container
ScrollReveal().reveal(".testimonial_card", {
  ...scrollRevealOption,
  interval: 500,
});
//instructor container
ScrollReveal().reveal(".instructor_card", {
  ...scrollRevealOption,
  interval: 500,
});
