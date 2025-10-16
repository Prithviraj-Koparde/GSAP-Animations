function introPageAnimation(){
    let tl = gsap.timeline();

tl.from("nav h1 , nav button",{
    y:-50,
    duration:0.3,
    opacity:0,
    stagger:0.1
})

tl.to("nav #nav-part-1 i",{
    scale:1.25,
    yoyo: true,
    repeat: -1,
    stagger: 0.1,
    ease:"bounce.in"
})

tl.from(".center #center-part-1 h1, .center #center-part-1 p",{
    x:-80,
    opacity:0,
    duration:0.3,
    stagger:0.2
})

tl.from(".center #center-part-1 button",{
    opacity:0,
    duration:0.5
},"-=0.2")

tl.from(".center #center-part-2 img",{
    x:80,
    opacity:0
},"-=1")

tl.from(".section-1 .section-1-bottom img",{
    y:50,
    opacity:0,
    duration:0.2,
    stagger:0.1
})
}
introPageAnimation()                // page-1-animation
