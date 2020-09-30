
var nameIn = document.getElementById("s-name");
nameIn.addEventListener("keyup", nameSearch);

var numIn = document.getElementById("s-num");
numIn.addEventListener("keyup", numSearch);

var ul = document.getElementById("pokedex");
var li = ul.getElementsByTagName("li");

var nameBool = false;
var numBool = false;

var pokemonSearch = [];

function nameSearch() { // Name search function
  var nameInput = document.getElementById("s-name");
  nameInput = nameInput.value.toUpperCase();  
  var checkLetters = /^[A-Za-z]+$/;
  var span;
  var textSearch;    
  pokemonSearch = [];

  if (!nameBool) {
    createDiv();
  }
  
  if (nameInput != "") {
    nameBool = true;  
  } else {
    nameBool = false;
  }  

  for (i = 0; i < li.length; i++) { 
    span = li[i].getElementsByTagName("span")[0]; // Gets all elements from the list in the html file by using span tag
    textSearch = span.textContent || span.innerText;
    if (nameInput.match(checkLetters) && nameInput.length < 20 && textSearch.toUpperCase().indexOf(nameInput) > -1) { // Checks if entry contains letters a-z, is less than 20 characters, and matches a pokemon name
      pokemonSearch.push(i); // Adds pokemon to pokemonSearch array      
    }else if(nameInput.length >= 20 && !nameInput.match(checkLetters) && nameInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Cannot enter more than 20 characters \nMust enter only a-z and A-Z");
        deleteDiv();
        break;
    }else if(nameInput.length >= 20 && nameInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Cannot enter more than 20 characters");
        deleteDiv();
        break;
    }else if(!nameInput.match(checkLetters) && nameInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Must enter only a-z and A-Z");
        deleteDiv();
        break;
    }else if(nameInput == "") {
      deleteDiv();
    }   
  }
  //createDiv();
  console.log(pokemonSearch);  
}


function numSearch() { // Number search function
  var numInput = document.getElementById("s-num"); // Gets variables from html file
  numInput = numInput.value;  
  var span;
  var numSearch;
  pokemonSearch = [];  

  if (!numBool) {
    createDiv();
  }

  if (numInput != "") {
    numBool = true;  
  } else {
    numBool = false;
  }
  
  for (i = 0; i < li.length; i++) { // Gets all elements from the list in the html file
    span = li[i].getElementsByTagName("span")[0];
    numSearch = span.textContent || span.innerText;
    if (numInput >= 1 && numInput <= 20 && numSearch.indexOf(numInput) > -1) { // Checks if number is between 1 and 20 and checks if number matches any pokemon
      pokemonSearch.push(i);  // Adds pokemon to pokemonSearch array      
    }else if((numInput < 1 || numInput > 20) && numInput != "") { // Outputs an appropriate alert message and breaks the loop
        alert("Must enter number 1-20");
        deleteDiv();
        break;
    }else if(numInput == "") {
      deleteDiv();      
    }
  }
  console.log(pokemonSearch);     
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
  
  for (i = 0; i < 3; i++) {
    var listElement = document.createElement("LI");
    
    var nodeImg = document.createElement("img");
    var nodeName = document.createElement("span");
    var nodeDes1 = document.createElement("span");
    var nodeDes2 = document.createElement("span");
    
    nodeImg.setAttribute("src", li[0].getElementsByTagName("img")[0].src);
    nodeName.appendChild(document.createTextNode(li[i].getElementsByTagName("span")[0].innerText));
    nodeDes1.appendChild(document.createTextNode(li[i].getElementsByTagName("span")[1].innerText));
    nodeDes2.appendChild(document.createTextNode(li[i].getElementsByTagName("span")[2].innerText));

    nodeName.setAttribute("class", "searchDesc");
    nodeDes1.setAttribute("class", "searchDesc");
    nodeDes2.setAttribute("class", "searchDesc");

    listElement.appendChild(nodeName);
    listElement.appendChild(nodeDes1);
    listElement.appendChild(nodeDes2);  
    searchUl.appendChild(listElement); 
  }
                                
  

  document.body.insertBefore(pokemonDiv, pokedex);
}


function deleteDiv() {
  var deleteDiv = document.getElementById("search-div");
  deleteDiv?.remove();        
}

