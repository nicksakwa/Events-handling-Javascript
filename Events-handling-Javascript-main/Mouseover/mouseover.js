document.addEventListener('DOMContentLoaded', ()=>{
let box = document.getElementById("myDiv");
box.addEventListener("mouseover", function(){
    box.style.backgroundColor ="green";
});
box.addEventListener("mouseout", function(){
    box.style.backgroundColor ="blue";
});
});