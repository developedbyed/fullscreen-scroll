let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".front-page",
    start: "top",
    end: "100%",
    scrub: "true",
    pin: true,
  },
});

tl.fromTo(
  ".front-page",
  {
    clipPath: "circle(5%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 2,
  }
);

tl.fromTo(
  ".music-note",
  {
    scale: 0.5,
  },
  {
    scale: 0,
    opacity: 0,
    duration: 1,
  },
  "-=2"
);

tl.fromTo(
  ".title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl.fromTo(
  ".sub-title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);
