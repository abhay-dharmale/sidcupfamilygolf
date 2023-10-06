let cursor = document.querySelector("#cursor")
let blurred = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x - 10 +"px"
    cursor.style.top = dets.y - 10 +"px"
    blurred.style.left = dets.x - 200 +"px"
    blurred.style.top = dets.y - 200 +"px"
})

let allh4 = document.querySelectorAll("#nav h4")
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter", () => {
        cursor.style.scale = 4
        cursor.style.border = "1px solid #dededec8"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", () => {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95c11e"
        cursor.style.backgroundColor = "#95c11e"
    })
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

gsap.from(".about img, .about-us", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 2
    }
})

gsap.from(".cards-cont .card", {
    scale: 0.8,
    duration: 0.8,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
    }
})

gsap.from(".page-3 #quote-left", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote-left",
        scroller: "body",
        start: "top 65%",
        end: "top 45%",
        scrub: 3
    }
})

gsap.from(".page-3 #quote-right", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#quote-right",
        scroller: "body",
        start: "top 100%",
        end: "top 98%",
        scrub: 3
    }
})

gsap.from(".page-4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: ".page-4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})