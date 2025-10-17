// intro page animation
function introPageAnimation() {
    let tl = gsap.timeline();

    tl.from("nav h1 , nav button", {
        y: -50,
        duration: 0.3,
        opacity: 0,
        stagger: 0.1
    })

    tl.to("nav #nav-part-1 i", {
        scale: 1.25,
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
        ease: "bounce.in"
    })

    tl.from(".center #center-part-1 h1, .center #center-part-1 p", {
        x: -80,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2
    })

    tl.from(".center #center-part-1 button", {
        opacity: 0,
        duration: 0.5
    }, "-=0.2")

    tl.from(".center #center-part-2 img", {
        x: 80,
        opacity: 0
    }, "-=1")

    tl.from(".section-1 .section-1-bottom img", {
        y: 50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1
    })
}
introPageAnimation()                // page-1-animation


// page 2 animation
function page2Animation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-2",
            scroller: "body",
            markers: true,
            start: "top 60%",
            end: "top 0%",
            scrub: 2
        }
    })

    tl.from(".section-2-services", {
        x: -300,
        opacity: 0,
        duration: 0.2
    })

    tl.from(".elements.whiteEle.row1.leftEle", {             // writing class refrence like this(without space) will trigger only line 1 left element 
        x: -300,
        opacity: 0,
        duration: 0.2
    }, "diagnolEle1")                                        // giving ant random names to two elements will trigger animation at same time 

    tl.from(".elements.blackEle.row1.rightEle", {             // writing class refrence like this(without space) will trigger only line 1 left element 
        x: 300,
        opacity: 0,
        duration: 0.2
    }, "diagnolEle2")

    tl.from(".elements.blackEle.row2.leftEle", {
        x: -300,
        opacity: 0,
        duration: 0.2
    }, "diagnolEle2")

    tl.from(".elements.whiteEle.row2.rightEle", {
        x: 300,
        opacity: 0,
        duration: 0.2
    }, "diagnolEle1")
}
page2Animation()                       // page-2-animation

// page 3 animation

function page3Animation() {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-3",
            scroller: "body",
            markers: true,
            start: "top 50%",
            end: "top 0%",
            scrub: 2
        }
    })

    tl3.from(".section-3-top", {
        x: -300,
        duration: 0.1,
        opacity: 0
    }, "content")

    tl3.from(".section-3-top h1", {
        x: 300,
        opacity: 0
    }, "top-content")

    tl3.from(".section-3-top p", {
        x: 300,
        opacity: 0
    }, "top-content")

    tl3.from(".section-3-top button", {
        duration: 2,
        opacity: 0
    }, "top-content")

    tl3.from(".section-3-top img", {
        x: 100,
        opacity: 0
    }, "top-content")


    tl3.from(".section-3-middle", {
        y: 300,
        opacity: 0,
        duration: 1
    }, "-=1")

    tl3.from(".section-3-bottom", {
        x: -300,
        opacity: 0,
        duration: 0.5
    }, "+=0.1", "content")
}
page3Animation()                         // page-3-animation