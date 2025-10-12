// let h1 = document.querySelector("h1")
// let h1Text = h1.textContent;
//OR

// let h1Text = document.querySelector("h1").textContent;
// let splittedText = h1Text.split("");   //splitting each letter on the basis of space" " , ""(no space), ","(comma), "."(dot), "a"(any character) 
// // console.log(h1Text);
// console.log(splittedText);

// let futureText = "";  //empty string

// splittedText.forEach(function(){
//     futureText = futureText + "hello";   //adding hello before each letter
// })

// console.log(futureText);

function breakTheText() {
    let h1 = document.querySelector("h1")
    let h1Text = h1.textContent;
    let splittedText = h1Text.split("");   //splitting each letter on the basis of space" " , ""(no space), ","(comma), "."(dot), "a"(any character)

    let futureText = ""  //empty string
    let halfValue = splittedText.length / 2
    splittedText.forEach(function (value, idx) {
        if (idx < halfValue) {
            futureText += `<span class="a">${value}</span>`
        }
        else {
            futureText += `<span class = "b">${value}</span>`
        }
    })
    h1.innerHTML = futureText;   //adding span before each letter
}

breakTheText()
//Animation

// gsap.from("h1 span",{ // only span will be animated only if span in h1 is changed to inline block style
//     y:50,
//     opacity:0,
//     duration: 0.5,
//     delay:0.5,
//     stagger:0.1
// })

gsap.from(".a", {
    y: 80,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2
})

gsap.from(".b", {
    y: -80,
    opacity: 0,
    duration: 0.3,
    stagger: -0.2
})