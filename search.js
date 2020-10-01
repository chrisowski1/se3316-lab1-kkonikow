
var nameIn = document.getElementById("s-name"); // Get the name search textbox element by id
nameIn.addEventListener("keyup", nameSearch); // Add event listener for name search textbox

var numIn = document.getElementById("s-num"); // Same as above but for number search
numIn.addEventListener("keyup", numSearch);

var ul = document.getElementById("pokedex"); // Get the list element from HTML by id
var li = ul.getElementsByTagName("li"); // Get the list elements by tag name

var pokemonSearch = []; // Creates array for search functions

function nameSearch() { // Name search function
  var nameInput = document.getElementById("s-name");
  nameInput = nameInput.value.toUpperCase();  
  var checkLetters = /^[A-Za-z]+$/;
  var span;
  var textSearch;    
  pokemonSearch = []; // Clears array 
  
  document.getElementById("s-num").value = ""; // Clear number search box

  for (i = 0; i < li.length; i++) { 
    span = li[i].getElementsByTagName("span")[0]; // Gets all elements from the list in the html file by using span tag
    textSearch = span.textContent || span.innerText;
    if (nameInput.match(checkLetters) && nameInput.length < 20 && textSearch.toUpperCase().indexOf(nameInput) > -1) { // Checks if entry contains letters a-z, is less than 20 characters, and matches a pokemon name
      pokemonSearch.push(i); // Adds pokemon to pokemonSearch array      
    }
  }
    createDiv(); // Creates the new element   

    if(nameInput.length >= 20 && !nameInput.match(checkLetters) && nameInput != "") { // Outputs an appropriate alert message and deletes the new div
      deleteDiv();
      alert("Cannot enter more than 20 characters \nMust enter only a-z and A-Z");            
    }else if(nameInput.length >= 20 && nameInput != "") { // Outputs an appropriate alert message and deletes the new div 
      deleteDiv();
      alert("Cannot enter more than 20 characters");           
    }else if(!nameInput.match(checkLetters) && nameInput != "") { // Outputs an appropriate alert message and deletes the new div
      deleteDiv();
      alert("Must enter only a-z and A-Z");            
    }else if (nameInput == "") { // Deletes the new div if the search box is empty
      deleteDiv();
    } 
}


function numSearch() { // Number search function
  var numInput = document.getElementById("s-num"); // Gets variables from html file
  numInput = numInput.value;  
  var span;
  var numSearch;
  pokemonSearch = []; // Clears array 
  
  document.getElementById("s-name").value = ""; // Clears name search box

  for (i = 0; i < li.length; i++) { // Gets all elements from the list in the html file
    span = li[i].getElementsByTagName("span")[0];
    numSearch = span.textContent || span.innerText;
    if (numInput >= 1 && numInput <= 20 && numSearch.indexOf(numInput) > -1) { // Checks if number is between 1 and 20 and checks if number matches any pokemon
      pokemonSearch.push(i);  // Adds pokemon to pokemonSearch array      
    }
  }   
    createDiv(); // Creates the new div   

    if((numInput < 1 || numInput > 20) && numInput != "") { // Outputs an appropriate alert message and deletes the new div
      deleteDiv();    
      alert("Must enter number 1-20");           
    }else if(numInput == "") { // Deletes the new div if the search box is empty
      deleteDiv();      
    }
  }       



function createDiv() { // Function to create and populate the new search element
  deleteDiv(); // Deletes existing div
  var pokemonDiv = document.createElement("div"); // Creates div element
  pokemonDiv.setAttribute("id", "search-div"); // Sets id

  var searchUl = document.createElement("ul"); // Creates ul element
  searchUl.setAttribute("id", "search-ul"); // Sets id

  var searchHead = document.createElement("h1"); // Creates h1 element
  searchHead.setAttribute("id", "search-title"); // Sets id  

  var searchTitle = document.createTextNode("Results:"); // Creates text node for title
  searchHead.appendChild(searchTitle); // Appends all children
  pokemonDiv.appendChild(searchHead);
  pokemonDiv.appendChild(searchUl);
  
  for (i = 0; i <= 19; i++) { // Runs loop for 20 iterations      
    if (pokemonSearch.includes(i)) { // Checks if i is in the pokemonSearch array    
      var listElement = document.createElement("LI"); // Creates li element
      listElement.setAttribute("class", "searchDesc"); // Sets class
      
      var nodeImg = document.createElement("img"); // Creates all elements for new search list
      var nodeName = document.createElement("span");
      var nodeDes1 = document.createElement("span");
      var nodeDes2 = document.createElement("span");
      
      nodeImg.setAttribute("src", li[i].getElementsByTagName("img")[0].src); // Gets source for image
      nodeName.appendChild(document.createTextNode(li[i].getElementsByTagName("span")[0].innerText)); // Appends pokemon information taken from HTML page
      nodeDes1.appendChild(document.createTextNode(li[i].getElementsByTagName("span")[1].innerText));
      nodeDes2.appendChild(document.createTextNode(li[i].getElementsByTagName("span")[2].innerText));

      nodeImg.setAttribute("class", "searchDesc"); // Sets all classes
      nodeName.setAttribute("class", "searchDesc");
      nodeDes1.setAttribute("class", "searchDescInfo");
      nodeDes2.setAttribute("class", "searchDescInfo");

      listElement.appendChild(nodeImg); // Appends children to the listElement element
      listElement.appendChild(nodeName);
      listElement.appendChild(nodeDes1);
      listElement.appendChild(nodeDes2);  
      searchUl.appendChild(listElement); // Appends the listElement to the ul
    } 
  }
  document.body.insertBefore(pokemonDiv, pokedex); // Inserts the entire new div before the main pokemon list
}


function deleteDiv() { // Function to delete the new div
  var deleteDiv = document.getElementById("search-div"); // Finds the new div by using the id
  deleteDiv?.remove(); // Removes the new div if it is not already null        
}

