gsap.to("#page2 h1",{
    transform:"transLateX(-200%)",
    scrollTrigger: {
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
    }
})