document.addEventsListener('DOMContent Loaded', ()=>{
    let input=document.getElementById('myinput');
    input.addEventListener("keydown", function(event){
        console.log("You pressed:" + event.key);
    });
});