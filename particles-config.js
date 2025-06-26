export const particlesConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 120,
      density: { enable: true, area: 1000 },
    },
    color: { value: "#00FFFF" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: {
      value: 3,
      random: { enable: true, minimumValue: 1 },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00FFFF",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "out" },
      bounce: false,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, links: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { quantity: 4 },
      remove: { quantity: 2 },
    },
  },
  detectRetina: true,
};