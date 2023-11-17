// var crsr = document.querySelector("#cursor")
// var crsrBlur = document.querySelector("#cursor-blur")

// document.addEventListener("mousemove", function(dets){
//    crsr.style.left = dets.x+"px" 
//    crsr.style.top = dets.y+"px"

//    crsrBlur.style.left = dets.x-150+"px" 
//    crsrBlur.style.top = dets.y-150+"px"
// })


gsap.to("nav",{
    backgroundColor : "#000",
    duration: 1,
    delay:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub: 2,
    }
})

// var page2all = document.querySelectorAll("")
// page2all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.backgroundColor = "#fff"
//         crsr.style.border = "1px solid #fff"
//     })
// })

