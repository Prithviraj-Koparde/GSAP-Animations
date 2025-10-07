gsap.to("#box", {
    x: 1096,
    duration:4,
    delay:2
})

gsap.from("#box2", {
    x: 1096,
    duration:4,
    delay:2
})

gsap.to("#box3", {
    x: 1096,
    duration:4,
    delay:2,
    rotate:360,
    backgroundColor:"red",
    borderRadius:"50%",
    scale:0.3,
    ease:"bounce"
}
)