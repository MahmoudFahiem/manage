new Splide("#testimonials-carousel", {
  type: "slide",
  rewind: true,
  speed: 1000,
  rewindByDrag: true,
  perPage: 1,
  arrows: false,
  // autoplay: true,
  classes: {
    // Add classes for pagination.
    pagination: "splide__pagination pt-8 space-x-2", // container
    page: `splide__pagination__page w-3 h-3 border-2 border-brightRed rounded-full hover:bg-brightRed is-active:bg-brightRed`, // each button
  },
}).mount();
