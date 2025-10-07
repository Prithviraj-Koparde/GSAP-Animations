let tl = gsap.timeline();

tl.from("h1",{
    y:-20,
    opacity:0,
    duration:1,
})

tl.from("h4,#Brand-logo",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})

tl.to("#Brand-logo",{
    repeat:-1,
    scale:1.1,
    yoyo:true,
    duration:0.8,
    ease:"sine.inOut",
})