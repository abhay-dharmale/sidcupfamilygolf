let cursor = document.querySelector("#cursor")
let blurred = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x - 10 +"px"
    cursor.style.top = dets.y - 10 +"px"
    blurred.style.left = dets.x - 150 +"px"
    blurred.style.top = dets.y - 150 +"px"
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.1,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})