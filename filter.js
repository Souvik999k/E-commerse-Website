function searchItems(){
   
    var input=document.getElementById("search").value.toLowerCase();
  
    var cards=document.querySelectorAll(".card");
 
    var text=document.querySelectorAll(".content");
    var cols=document.querySelectorAll(".col-card");
 
    for(var i=0; i<cards.length;i++)
    {
        if(text[i].innerHTML.toLowerCase().includes(input))
        {
            cards[i].style.display="block";
           cols[i].style.display="block";
           }
        else{
            cards[i].style.display="none";
            cols[i].style.display="none";
        }
    }
}

// ---------------------checkbox----------------------------------


var checkItem=document.querySelectorAll(".check-item").forEach(function(check){
    check.addEventListener("click",function(){
        var cards=document.querySelectorAll(".card");
        var text=document.querySelectorAll(".content");
        var cols=document.querySelectorAll(".col-card");
        var lebelItem=this.parentElement.querySelector(".lebel-item");
        if(check.checked==true){
        //    alert(lebelItem.innerHTML);
        text.forEach(function(c){
            // alert(c.innerHTML);
            // alert(lebelItem.innerHTML)
            if(c.innerHTML.includes(lebelItem.innerHTML)){
               c.parentElement.parentElement.parentElement.parentElement.style.display="block";
            }
            else{
                c.parentElement.parentElement.parentElement.parentElement.style.display="none";
            }
        })
          
           }
      })
})
// ------------------------brand-check--------------------------------

var checkItem1=document.querySelectorAll(".brand-name").forEach(function(check1){
    check1.addEventListener("click",function(){
        var cards=document.querySelectorAll(".card");
        var text1=document.querySelectorAll(".content1");
        var cols=document.querySelectorAll(".col-card");
        var lebelItem1=this.parentElement.querySelector(".brand");
        if(check1.checked==true){
        //    alert(lebelItem.innerHTML);
        text1.forEach(function(c1){
            // alert(c.innerHTML);
            // alert(lebelItem.innerHTML)
            if(c1.innerHTML.includes(lebelItem1.innerHTML)){
               c1.parentElement.parentElement.parentElement.parentElement.style.display="block";
            }
            else{
                c1.parentElement.parentElement.parentElement.parentElement.style.display="none";
            }
        })
          
           }
      })
})



var cards=document.querySelectorAll(".card");
cards.forEach(function(next){
    next.addEventListener("click",function(){
        window.open("product.html","_self");
    })
})


var filter=document.querySelector(".logo");
filter.addEventListener("click",function(){
    window.open("website.html","_self");
})