

let toggle = document.getElementById("toggle");

toggle.addEventListener("click", function(){
    if(document.body.style.backgroundColor === "lightblue"){
       
        document.body.style.backgroundColor = "darkblue";
    }

    else{
        document.body.style.backgroundColor = "lightblue";
    }
})

