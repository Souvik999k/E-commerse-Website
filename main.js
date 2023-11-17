function UserInput(){
    var input1=document.querySelector("#input1 input");
    if(input1.value.length<5){
        document.querySelector("#input1 span").style.display="block";
        document.document.querySelector("#input1").classlist.add("invalid");
    }
    else if(input1.value.length>5 && input1.match("@")){
        document.querySelector(".email").classList.add("d-block");

    }
    else{
        document.querySelector("#input1 span").style.display="none";
        document.document.querySelector("#input1").classlist.remove("invalid");
    }
}
function PasswordInput(){
   var input2=document.querySelector("#input2 input");
    if(input2.value.length<5){
        document.querySelector("#input2 span").style.display="block";
        document.document.querySelector("#input2").classlist.add("invalid");
    }
    else{
        document.querySelector("#input2 span").style.display="none";
        document.document.querySelector("#input2").classlist.remove("invalid");
    }
}

var eyeon=document.querySelector('.eye-on');
var eyeoff=document.querySelector('.eye-off');
var type=document.querySelector('.type')
function eyeToggle(){
    
    eyeon.classList.toggle('d-block');
    eyeoff.classList.toggle('d-none');
    if(type.type=="password"){
        type.type="text";

    }
    else{
        type.type="password";
    }
}

var signin=document.addEventListener("click",function(){
    window.open("website.html","-self");
})