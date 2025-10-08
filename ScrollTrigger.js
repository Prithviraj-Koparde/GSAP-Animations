gsap.to("#page2 h1",{
    transform:"transLateX(-200%)",
    scrollTrigger: {
        trigger:"#page2", // while using pin always target parent class id not the child
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true,
    }
})