
const header = () => {
    window.addEventListener("scroll", function() {
        if (this.scrollY > 0) {
            document.querySelector(".js-header").classList.add("active");
        } else {
            document.querySelector(".js-header").classList.remove("active");
        }
    })
}

header();

var tle;

tle = gsap.timeline({defauts: {ease: "power1.out"}});

tle.to(".logo a", {opacity: 1, y: 0,duration: .5, stagger: .25, });
tle.to(".navb a", {opacity: 1, y: 0,duration: .5, stagger: .25, });
tle.to(".img__content", {opacity: 1, y: 0,duration: .5, stagger: .25, });
tle.to(".data__content", {opacity: 1, x: 0,duration: .5, stagger: .25, });
tle.to(".btn", {opacity: 1, y: 0,duration: .5, stagger: .25, });