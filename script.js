/*
=========================================================
INTERACTION + MOTION EXERCISE
=========================================================

Add your animation code progressively.

Suggested sequence:

01 — Scroll-triggered reveal
     IntersectionObserver     

02 — Staggered reveal
     transition-delay or JavaScript

03 — Parallax
     scroll event + transform

04 — Mouse-in
     CSS :hover first
     JavaScript mouseenter second

05 — Pointer-following
     mousemove + getBoundingClientRect()

06 — SVGator
     replace the SVG placeholder

07 — Advanced
     GSAP + ScrollTrigger

=========================================================
*/


console.log("Motion exercise loaded.");
const hero =
  document.querySelector(".hero");

window.addEventListener(
  "load",
  () => {

    hero.classList.add("is-loaded");

  }
);

const revealElements =
  document.querySelectorAll(".reveal, .ecosystem-reveal");


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "is-visible"
          );

        }

      });

    },

    {
      threshold: 0.25
    }

  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});

const parallaxSection =
  document.querySelector(
    ".pollination-section"
  );


const parallaxObjects =
  document.querySelectorAll(
    ".pollination-section [data-parallax]"
  );


function updateParallax() {

  const sectionRect =
    parallaxSection.getBoundingClientRect();


  const viewportHeight =
    window.innerHeight;


  const sectionProgress =
    (
      viewportHeight -
      sectionRect.top
    )
    /
    (
      viewportHeight +
      sectionRect.height
    );


  parallaxObjects.forEach(
    element => {

      const speed =
        Number(
          element.dataset.parallax
        );


      const movement =
        sectionProgress * speed;


      element.style.transform =
        `translateY(${movement}px)`;

    }
  );

}


window.addEventListener(
  "scroll",
  updateParallax
);


updateParallax();

const mouseStage =
  document.querySelector(
    ".mouse-stage"
  );


const mouseTarget =
  document.querySelector(
    ".mouse-target"
  );


mouseStage.addEventListener(
  "mousemove",
  event => {

    const rect =
      mouseStage.getBoundingClientRect();


    const mouseX =
      event.clientX -
      rect.left;


    const mouseY =
      event.clientY -
      rect.top;


    const centerX =
      rect.width / 2;


    const centerY =
      rect.height / 2;


    const offsetX =
      mouseX -
      centerX;


    const offsetY =
      mouseY -
      centerY;


    const movementX =
      offsetX * 0.12;


    const movementY =
      offsetY * 0.12;


    mouseTarget.style.transform =
      `
      translate(
        calc(-50% + ${movementX}px),
        calc(-50% + ${movementY}px)
      )
      `;

  }
);

mouseStage.addEventListener(
  "mouseleave",
  () => {

    mouseTarget.style.transform =
      "translate(-50%, -50%)";

  }
);

const svgStage =
  document.querySelector(
    ".svg-stage"
  );


const svgSection =
  document.querySelector(
    ".svg-section"
  );


function updateSvgMovement() {

  const rect =
    svgSection.getBoundingClientRect();


  const viewportHeight =
    window.innerHeight;


  const progress =
    (
      viewportHeight -
      rect.top
    )
    /
    (
      viewportHeight +
      rect.height
    );


  const movement =
    progress * 120;


  svgStage.style.transform =
    `translateY(${-movement}px)`;

}


window.addEventListener(
  "scroll",
  updateSvgMovement
);


updateSvgMovement();

const finale =
  document.querySelector(
    ".finale-section"
  );


const finaleObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "is-visible"
          );

        }

      });

    },

    {
      threshold: 0.25
    }

  );


finaleObserver.observe(finale);

const finaleBee =
  document.querySelector(
    ".finale-bee"
  );


const finaleFlowers =
  document.querySelectorAll(
    ".finale-object"
  );


function updateFinale() {

  const rect =
    finale.getBoundingClientRect();


  const progress =
    (
      window.innerHeight -
      rect.top
    )
    /
    (
      window.innerHeight +
      rect.height
    );


  finaleBee.style.transform =
    `
    translate(
      ${progress * 250}px,
      ${progress * -120}px
    )
    rotate(${progress * 20}deg)
    `;


  finaleFlowers.forEach(
    (flower, index) => {

      const speed =
        30 + index * 25;


      flower.style.transform =
        `translateY(
          ${progress * speed}px
        )`;

    }
  );

}


window.addEventListener(
  "scroll",
  updateFinale
);