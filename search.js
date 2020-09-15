

function nameSearch(){
    var nameInput = document.getElementById("s-name");    
    nameInput = nameInput.value.toUpperCase();
    var ul = document.getElementById("pokedex");
    var li = ul.getElementsByTagName("li");
    console.log("Test name");
    console.log(nameInput);        
}

function numSearch(){
    var numInput = document.getElementById("s-num");
    numInput = numInput.value;
    var ul = document.getElementById("pokedex");
    var li = ul.getElementsByTagName("li");
    
    if(numInput>=1 && numInput<=20){
        console.log("Valid");        
    }
    else{
        console.log("Invalid");        
    }
}
