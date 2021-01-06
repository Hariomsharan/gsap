var btn = document.querySelector("#btn");
var fsnav = document.querySelector("#fsnav");
var close = document.querySelector("#close");

btn.addEventListener('click', function(){
    fsnav.style.top = "0%";
})

close.addEventListener('click', function(){
    fsnav.style.top = "-100%";
})




var tl = gsap.timeline()

tl.from(".an", {
    stagger: .2,
    x: 30,
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut
})
.from("#main h2", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: 'Expo.easeInOut'
} , '-=.5')
// .to("#img", {
//     width: '100%',
//     duration: 1,
//     ease: 'Expo.easeInOut'
// })
.from("#name", {
    opacity:0,
    y:30,
    duration: 1,
    ease:'Expo.easeInOut'
})
.from("#main button", {
    opacity: 0,
    y: 30,
    duration: .5,
    ease:'Expo.easeInOut'
})


