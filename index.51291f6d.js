gsap.registerPlugin(ScrollTrigger),gsap.from(".animate__fadeInUp-to",{scrollTrigger:{trigger:".animate__fadeInUp-to",start:"bottom center",end:"top 0%",scrub:!0},yPercent:-50,duration:3}),[".animate__fadeInLeft-first",".animate__fadeInLeft-second",".animate__fadeInLeft-third"].forEach(r=>{gsap.from(r,{scrollTrigger:{trigger:r,start:"5px 100%",end:"top 20%",scrub:!0},xPercent:-100,duration:1})}),[".animate__fadeInRight-first",".animate__fadeInRight-second",".animate__fadeInRight-third"].forEach(r=>{gsap.from(r,{scrollTrigger:{trigger:r,start:"5px 100%",end:"top 20%",scrub:!0},xPercent:100,duration:1})});
//# sourceMappingURL=index.51291f6d.js.map