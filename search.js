
var nameIn = document.getElementById("s-name");
nameIn.addEventListener("keyup", nameSearch);

var numIn = document.getElementById("s-num");
numIn.addEventListener("keyup", numSearch);


function nameSearch() { // Name search function
  var nameInput = document.getElementById("s-name");
  nameInput = nameInput.value.toUpperCase();
  var ul = document.getElementById("pokedex");
  var li = ul.getElementsByTagName("li");
  var checkLetters = /^[A-Za-z]+$/;
  var span;
  var textSearch;    
  var pokemonSearch = [];

  createDiv();

  for (i = 0; i < li.length; i++) { 
    span = li[i].getElementsByTagName("span")[0]; // Gets all elements from the list in the html file by using span tag
    textSearch = span.textContent || span.innerText;
    if (nameInput.match(checkLetters) && nameInput.length < 20 && textSearch.toUpperCase().indexOf(nameInput) > -1) { // Checks if entry contains letters a-z, is less than 20 characters, and matches a pokemon name
      pokemonSearch.push(i); // Adds pokemon to pokemonSearch array      
    }else if(nameInput.length >= 20 && !nameInput.match(checkLetters) && nameInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Cannot enter more than 20 characters \nMust enter only a-z and A-Z");
        break;
    }else if(nameInput.length >= 20 && nameInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Cannot enter more than 20 characters");
        break;
    }else if(!nameInput.match(checkLetters) && nameInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Must enter only a-z and A-Z");
        break;
    }   
  }  
}


function numSearch() { // Number search function
  var numInput = document.getElementById("s-num"); // Gets variables from html file
  numInput = numInput.value;
  var ul = document.getElementById("pokedex");
  var li = ul.getElementsByTagName("li");
  var span;
  var numSearch;    
  var pokemonSearch = [];

  for (i = 0; i < li.length; i++) { // Gets all elements from the list in the html file
    span = li[i].getElementsByTagName("span")[0];
    numSearch = span.textContent || span.innerText;
    if (numInput >= 1 && numInput <= 20 && numSearch.indexOf(numInput) > -1) { // Checks if number is between 1 and 20 and checks if number matches any pokemon
      pokemonSearch.push(i);  // Adds pokemon to pokemonSearch array      
    }else if((numInput < 1 || numInput > 20) && numInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Must enter number 1-20");
        break;
    }
  }     
}


function createDiv() {
  var pokemonDiv = document.createElement("div");
  pokemonDiv.setAttribute("id", "search-div");

  var searchUl = document.createElement("ul");
  searchUl.setAttribute("id", "search-ul");

  var searchHead = document.createElement("h1");
  searchHead.setAttribute("id", "search-title");  

  var searchTitle = document.createTextNode("Results:");
  searchHead.appendChild(searchTitle);
  pokemonDiv.appendChild(searchHead);
  pokemonDiv.appendChild(searchUl);  

  document.body.insertBefore(pokemonDiv, pokedex);
}


