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

gsap.from("#page1 #box1",{
    x:-100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger:"#page1 #box1", 
        scroller:"body",
        markers: true,
        start:"top 15%",
        end:"top 15%",
    }
})

gsap.from("#page1 #box2",{
    x:100,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger:"#page1 #box2", 
        scroller:"body",
        markers: true,
        start:"top 15%",
        end:"top 15%",
    }
})

let cursor = document.querySelector("#cursor")
let page1 = document.querySelector("#page1")
let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#box2")

page1.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
    })
})

box1.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"rgba(227, 210, 210, 0.53)"
    })
})

box2.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"rgba(227, 210, 210, 0.53)"
    })
})

box1.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})

box2.addEventListener("mouseleave", function(){
     cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})