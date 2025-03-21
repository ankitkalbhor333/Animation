gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360

})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:"#page2 #box"
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 box",
        scroller:"body",
        markers:true,
start:"top 60%"
    }
})
gsap.from("#page2 h1",{
    opacity:0,
    x:500,
    duration:3,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }

})
// gsap.from("#page3 #box",{
//     opacity:0,
//     scale:0,
//     x:-500,
//     rotate:700,
//     duration:5,
//     scrollTrigger:{
//         trigger:"#page3 box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//       end:"top 30%",
//         scrub:true,

//     }

// })

gsap.to("#page3 h1",{
    duration:1,
    delay:2,
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
    markers:true,
start:"top 0%",
top:"top -150%",
scrub:2,
pin: true

    }
})