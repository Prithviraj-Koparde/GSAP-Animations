function WheelAnimation() {
    window.addEventListener("wheel", function (dets) {
        // console.log(dets.deltaY)                    // deltaY is a value which changes when whell is scrolled
        if (dets.deltaY > 0) {

            gsap.to(".page2Animation", {
                transform: 'translateX(-200%)',
                duration: 3,
                repeat: -1,
                ease: "none"
            })

            gsap.to(".page2Animation h2", {
                rotate: 180,
            })

        } else {
            gsap.to(".page2Animation", {
                transform: 'translateX(0%)',
                duration: 3,
                repeat: -1,
                ease: "none"
            })

            gsap.to(".page2Animation h2", {
                rotate: 0,
            })
        }
    })

}

WheelAnimation()            // function call