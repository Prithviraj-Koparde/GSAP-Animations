let menu = document.querySelector("#nav i")
let cross = document.querySelector("#navBar i")

let tl = gsap.timeline()

tl.to("#navBar", {
    right: 0,
    duration: 0.5,
    ease: "power2.out"
})

tl.from("#navBar h1", {
    x: 100,
    duration: 0.2,
    opacity: 0,
    stagger: 0.2,
})

tl.from(cross, {
    scale: 0,
    duration: 0.1,
    opacity: 0,
})

tl.pause()

menu.addEventListener("click", function () {
    tl.play()
})

cross.addEventListener("click", function () {
    tl.reverse()
})