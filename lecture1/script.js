// gsap.from("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%"
// })
//.to for initial to final move of animation
//.from final to intial move of animation
// gsap.from("h1",{
//     opacity:0,
//     color:"red",
//     duration:2,
//     delay:1,
//     x:30,
//     stagger:-1
// })
// gsap.from("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     repeat:-1,
//     yoyo:true
// })
// gsap.to("#box1",{
//     x:1000,
//     duration:1.5,
//     delay:1,
//     rotate:360,
// })
// gsap.to("#box2",{
//     x:1000,
//     duration:1.5,
//     delay:2.5,
//     rotate:360,

// })
// gsap.to("#box3",{
//     x:1000,
//     duration:1.5,
//     delay:4,
//     rotate:360,
//     borderRadius:"50%",
// scale:2
// })
// var tl=gsap.timeline()
// tl.to("#box1",{
//     x:1000,
//     duration:2,
//     rotate:360,
// })
// tl.to("#box2",{
//     x:1000,
//     duration:2,
//     rotate:360,
// })
// tl.to("#box3",{
//     x:1000,
//     duration:2,
//     rotate:360,
// })
var tl=gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:2,

})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
stagger:.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})
