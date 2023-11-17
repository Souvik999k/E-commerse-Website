var mainPic=document.querySelector(".main");
var view=document.querySelectorAll(".view");
// console.log(view);
view.forEach(function(c){
    c.addEventListener("click",function(){
        mainPic.src=c.src;
       
    })
})

var addToCart=document.querySelector(".add-to-cart");
addToCart.addEventListener("click",function(){
    window.open("cart.html","_self");
})