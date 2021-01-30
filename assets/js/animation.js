const mainPageEl = document.querySelector(".main-page");
const navbarItem = document.querySelectorAll(".navbar__item");
const subHeading = document.querySelector(".sub-heading");
const scrollBarIcon = document.querySelector('.scroll-down');

//featureCard
const featureCard = $('.feature__card');

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

////////////////////////////////////////////////////////////////////
///ABOUT SECTION

gsap.from('.heading__about', {
  scrollTrigger: {
    trigger: '.heading__about',
    markers: false,
    toggleActions: "restart reverse restart pause",
  },
  xPercent: 50,
  opacity: 0,
  duration: 1,
  ease: 'ease'
});

gsap.from(".info-box__text", {
  scrollTrigger: {
    trigger: ".info-box",
    markers: false,
    toggleActions: "restart reverse restart pause",
  },
  yPercent: 50,
  opacity: 0,
  duration: 1,
  ease: "ease",
});

gsap.from(".feature__card", {
  scrollTrigger: {
    trigger: ".info-box__animate",
    markers: false,
    toggleActions: "restart reverse restart pause",
  },
  yPercent: 50,
  opacity: 0,
  stagger: 0.1,
  // duration: .5,
  // ease: "ease",
});

//Navbar fixed

ScrollTrigger.create({
  trigger: ".scroll-down",
  start: "top 100px",
  end: 9999,
  markers: false,
  toggleClass: { className: "navbar--scrolled", targets: ".navbar" },
});

//Headings


//Breaking subheading into span

const subHeadingText = document.querySelector(".hide-text");

const sHeadingChar = subHeadingText.textContent.split("");

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

  //scrollbar-icon

  gsap.to(scrollBarIcon, {yPercent: -100, ease: 'back', yoyo: true, repeat: -1 })


  ////////////////////////////////////////////////////////////////////////////////////////////
  //Feature Card move



  featureCard.on('mouseenter', function (e) {
    let thisPage = $(this).attr('id');
    console.log(thisPage);

     gsap.to($('#'+thisPage), {
       yPercent: -20,
       scale: 1.1,
       ease: "ease",
       duration: 0.4,
     });
  })

   featureCard.on("mouseleave", function (e) {
     let thisPage = $(this).attr("id");

     gsap.to($("#" + thisPage), {
       yPercent: 0,
       scale: 1,
       ease: "ease",
       duration: 0.4,
     });
   });


