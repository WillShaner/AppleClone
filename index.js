var container = document.querySelector('.image-wrapper');
var boxes = document.querySelector('.image-holder');

gsap.to(boxes, {
  x: () => {
    return -(container.scrollWidth - document.body.offsetWidth) + 'px';
  },
  ease: 'sine',
  scrollTrigger: {
    trigger: boxes,
    start: () => 'end end',
    end: () => {
      return '+=' + container.scrollWidth;
    },
    scrub: true,
    pin: document.querySelector('.container-fluid'),
    anticipatePin: 1,
  },
});

