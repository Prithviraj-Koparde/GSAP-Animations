let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.3,
    })
})

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "rgba(227, 210, 210, 0.53)"
    })
})

imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white"
    })
})