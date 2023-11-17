var quantity = 1;
document.querySelectorAll(".add").forEach(function(addBtn){
    addBtn.parentElement.querySelector(".quantity").innerText=quantity;
    addBtn.addEventListener("click",function(){
        quantity= +(this.parentElement.querySelector(".quantity").innerText)+1;
        addBtn.parentElement.querySelector(".quantity").innerText=quantity;
        // alert(quantity);
        updateTotal();
    });
});

document.querySelectorAll(".subBtn").forEach(function(subBtn){
    subBtn.parentElement.querySelector(".quantity").innerText=quantity;
    subBtn.addEventListener("click",function(){
        quantity= +(this.parentElement.querySelector(".quantity").innerText)-1;
        if(quantity==0){
            this.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
            var price=document.querySelector(".price");
            price.remove();

            var artlistH2=document.createElement('h2');
            artlistH2.id="text";
            const text=document.getElementById('text');
            document.body.append(artlistH2);
            artlistH2.innerText='Sorry! Your Cart is Empty';
            document.getElementById("text").style.textAlign="center";
        }
        subBtn.parentElement.querySelector(".quantity").innerText=quantity;
        updateTotal();
        // alert(quantity);
    })
    
})

function updateTotal(){
    var total = 0;
    var subTotal = document.getElementById("subTotal");
    var discount= document.getElementById("discount").innerText.replace("$","");
  
    var delivery= document.getElementById("delivery").innerText.replace("$","");
    
    var totalPrice= document.getElementById("totalPrice");
 
    subTotal.innerHTML = total;
    var cardRow = document.querySelector(".c-row");
    var card = cardRow.querySelectorAll(".c");
    for(var i = 0; i<card.length;i++){
       var itemePrice= +(card[i].querySelector(".itemPrice").innerHTML).replace("$","");
       var itemequantity= +(card[i].querySelector(".quantity").innerText);
       total=total+(itemePrice*itemequantity);
    //    alert(total);
    }
   
    subTotal.innerHTML="$ "+total;
    totalPrice.innerHTML=+total-discount-delivery;
    totalPrice.innerText="$ "+totalPrice.innerHTML
}
var continue1= document.querySelector(".b");
continue1.addEventListener("click", function(){
   window.open("order.html","_self");
})