const mainPageEl = document.querySelector(".main-page");
const navbarItem = document.querySelectorAll(".navbar__item");
const subHeading = document.querySelector(".sub-heading");

//Activating  ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

//header animations
gsap.from(navbarItem, { y: "-200%", duration: 0.5, ease: "back", stagger: 0.1 });
gsap.from(".moon", {
  scrollTrigger: {
    trigger: ".heading-box",
    start: "top center",
    markers: false,
    toggleActions: "play reverse restart pause",
  },
  yPercent: 100,
  duration: 1,
});

gsap.from(".mountain", {
  scrollTrigger: {
    trigger: ".heading-box",
    start: "top center",
    markers: false,
    toggleActions: "play reverse restart pause",
  },
  x: "100%",
  duration: 1,
  stagger: 0.1,
  ease: "back",
});

//Navbar fixed

ScrollTrigger.create({
  trigger: ".scroll-down",
  start: "top 100px",
  end: 1000,
  markers: false,
  toggleClass: { className: "navbar--scrolled", targets: ".navbar" },
});

//Headings


//Breaking subheading into span

const subHeadingText = document.querySelector(".hide-text");

const sHeadingChar = subHeadingText.textContent.split("");
console.log(sHeadingChar);

sHeadingChar.forEach((el) => {
  const spanEl = document.createElement("span");
  spanEl.textContent = el;
  subHeading.appendChild(spanEl);
});


const headingTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".heading-box",
    start: "top center",
    markers: false,
    toggleActions: "play reverse restart pause",
  },
});

headingTl
  .to(".heading-main--anim--box", {
    width: "100%",
    yoyo: true,
    delay: 0.5,
    repeat: 1,
    duration: 0.5,
    ease: "back",
  })
  .from(".heading-main--text", { opacity: 0, duration: 0.5 }, "-=.5")
  .from(".sub-heading", {
    scale: 1.2,
    opacity: 0,
    stagger: 0.1,
    duration: .4,
    ease: "back",
  })
  .from('.btn--anim',{
    yPercent: 100,
    opacity: 0,
    ease: 'back',
    duration: 1
  })
