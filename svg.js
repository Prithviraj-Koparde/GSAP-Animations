let path = "M 10 100 Q 750 100 1590 100"
let finalPath = "M 10 100 Q 750 100 1590 100"

let string = document.querySelector("#string")
// eventlisteners --> mouseente , mouseleave, mousemove, click, dblclick, mousedown, mouseup, mouseout


string.addEventListener("mousemove", function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 1590 100`

    gsap.to("svg path", {
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"   
    })
})

// string.addEventListener("mouseleave", function(){
//     gsap.to("svg path",{
//         attr:{d:initialPath},
//         duration:0.2,
//         ease:"power3.out"
//     })
// })
string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:1,
        ease:"elastic.out(1,0.2)"
    })
})