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
    // ease:"bounce"
    yoyo:true,
    repeat:-1
})

gsap.from("h1", {
    y:20,
    opacity:0,
    color:"yellow",
    duration:2,
    delay:1,
    repeat:-1,
    ease:"bounce"
})

gsap.from("h2", {
    y:20,
    opacity:0,
    color:"red",
    duration:2,
    delay:1,
    stagger:0.2,
    ease:"bounce"
})

let tl = gsap.timeline()

tl.to("#box4", {
    x: 1096,
    duration:2,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"purple",
})

tl.from("#box5", {
    x: 1096,
    duration:2,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"orange",
})

tl.from("#box6",{
    y:20,
    duration:2,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"pink",
    ease:"bounce"
})