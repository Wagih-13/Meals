window.onload = function () {
  Particles.init({ selector: ".background" });
};

Particles.init({
  // normal options
  selector: ".background",
  maxParticles: 450,
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 200,
        color: "white",
        connectParticles: false,
      },
    },
    {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: false,
      },
    },
    {
      breakpoint: 320,
      options: {
        maxParticles: 0,

        // disables particles.js
      },
    },
  ],
});

var particles = Particles.init({
  // options
  color: "white",
});
