// const btn = document.getElementsByClassName("aniBtn");

// gsap.from(".aniBtn", { scale: 1, repeat: -1, duration : .5 })
const tl = gsap.timeline({
    // trigger: ".animation",
    // // pin: true, // pin the trigger element while active
    // start: "bottom bottom",
    // scrub: true,
});
tl.to(".aniBtn", {
    duration: 1.5,
    scale: 1.3,
    repeat: -1,
    ease: "linear",
    transformOrigin: "center",
});
tl.to(".hero-title", {
    scale: 1.4,
    duration: 2.6,
    color: "orange",
    repeat: -1,
    ease: "ease-in-out",
    yoyo: true,
});

tl.to(".animation", {
    scrollTrigger: '.animation',

    clipPath: "inset(15%)",
    // scale: 1.4,
    // scale: 1.4,
    duration: 2.6,
    // color: "orange",
    repeat: -1,
    ease: "ease-in-out",
    yoyo: true,
});
