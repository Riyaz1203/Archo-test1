// Animations
AOS.init({
    duration: 2200,
  })

//   data-aos="zoom-in" data-aos-duration="1500"


// menu toggle
const menuBtn =document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


// cursor

// var cursor =document.querySelector(".cursor");
// var cursor2 =document.querySelector(".cursor2");

// document.addEventListener("mousemove",function(e){
//     cursor.style.cssText = cursor2.style.cssText = "left:"+e.clientX+"px; top:"+e.clientY+"px;";
// });


// footer
