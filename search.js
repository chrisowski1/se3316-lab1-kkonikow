var pokemon = ["#01 Bulbasaur   Type: Grass/Poison   Parent: N/A", // Pokemon array used for search function 
  "#02 Ivysaur   Type: Grass/Poison   Parent: Bulbasaur", 
  "#03 Venusaur   Type: Grass/Poison   Parent: Ivysaur", 
  "#04 Charmander   Type: Fire   Parent: N/A", 
  "#05 Charmeleon   Type: Fire   Parent: Charmander", 
  "#06 Charizard   Type: Fire/Flying   Parent: Charmeleon", 
  "#07 Squirtle   Type: Water   Parent: N/A", 
  "#08 Wartortle   Type: Water   Parent: Squirtle", 
  "#09 Blastoise   Type: Water   Parent: Wartortle", 
  "#10 Caterpie   Type: Bug   Parent: N/A", 
  "#11 Metapod   Type: Bug   Parent: Caterpie", 
  "#12 Butterfree   Type: Bug/Flying   Parent: Metapod", 
  "#13 Weedle   Type: Bug/Poison   Parent: N/A", 
  "#14 Kakuna   Type: Bug/Poison   Parent: Weedle", 
  "#15 Beedrill   Type: Bug/Poison   Parent: Kakuna", 
  "#16 Pidgey   Type: Normal/Flying   Parent: N/A", 
  "#17 Pidgeotto   Type: Normal/Flying   Parent: Pidgey", 
  "#18 Pidgeot   Type: Normal/Flying   Parent: Pidgeotto", 
  "#19 Rattata   Type: Normal   Parent: N/A", 
  "#20 Raticate   Type:  Normal   Parent: Rattata", ];

function nameSearch() { // Name search function
  var nameInput = document.getElementById("s-name"); // Gets variables from html file using id's and tags
  nameInput = nameInput.value.toUpperCase();
  var ul = document.getElementById("pokedex");
  var li = ul.getElementsByTagName("li");
  var checkLetters = /^[A-Za-z]+$/;
  var span;
  var textSearch;
  var num = 0;
  var vali = true;  
  var pokemonSearch = [];

  for (i = 0; i < li.length; i++) { 
    span = li[i].getElementsByTagName("span")[0]; // Gets all elements from the list in the html file by using span tag
    textSearch = span.textContent || span.innerText;
    if (nameInput.match(checkLetters) && nameInput.length < 20 && textSearch.toUpperCase().indexOf(nameInput) > -1 && vali) { // Checks if entry contains letters a-z, is less than 20 characters, and matches a pokemon name
      pokemonSearch.push(i); // Adds pokemon to pokemonSearch array 
      num++;
      if (num == 5) { // Stops running the loop if the search reaches 5 matches
        vali = false;
      }
    }else if(nameInput.length >= 20 && !nameInput.match(checkLetters)) { // Outputs an appropriate alert message and breaks the loop
        alert("Cannot enter more than 20 characters \nMust enter only a-z and A-Z");
        break;
    }else if(nameInput.length >= 20) { // Outputs an appropriate alert message and breaks the loop
        alert("Cannot enter more than 20 characters");
        break;
    }else if(!nameInput.match(checkLetters)) { // Outputs an appropriate alert message and breaks the loop
        alert("Must enter only a-z and A-Z");
        break;
    }   
  }

  if(pokemonSearch.length == 1) { // Creates an alert displaying all pokemon matches found
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]]);    
  }else if(pokemonSearch.length == 2) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]]);
  }else if(pokemonSearch.length == 3) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]] + "\n" + pokemon[pokemonSearch[2]]);    
  }else if(pokemonSearch.length == 4) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]] + "\n" + pokemon[pokemonSearch[2]] + "\n" + pokemon[pokemonSearch[3]]);
  }else if(pokemonSearch.length == 5) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]] + "\n" + pokemon[pokemonSearch[2]] + "\n" + pokemon[pokemonSearch[3]] + "\n" + pokemon[pokemonSearch[4]]);
  }else {
    alert("No matches found");
  }
}


function numSearch() { // Number search function
  var numInput = document.getElementById("s-num"); // Gets variables from html file
  numInput = numInput.value;
  var ul = document.getElementById("pokedex");
  var li = ul.getElementsByTagName("li");
  var span;
  var numSearch;
  var num = 0;
  var vali = true;  
  var pokemonSearch = [];

  for (i = 0; i < li.length; i++) { // Gets all elements from the list in the html file
    span = li[i].getElementsByTagName("span")[0];
    numSearch = span.textContent || span.innerText;
    if (numInput >= 1 && numInput <= 20 && numSearch.indexOf(numInput) > -1 && vali) { // Checks if number is between 1 and 20 and checks if number matches any pokemon
      pokemonSearch.push(i);  // Adds pokemon to pokemonSearch array 
      num++;
      if (num == 5) { // Stops running the loop if the search reaches 5 matches
        vali = false;
      }
    }else if(numInput < 1 || numInput > 20) { // Outputs an appropriate alert message and breaks the loop
        alert("Must enter number 1-20");
        break;
    }
  }

  if(pokemonSearch.length == 1) { // Creates an alert displaying all pokemon matches found
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]]);    
  }else if(pokemonSearch.length == 2) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]]);
  }else if(pokemonSearch.length == 3) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]] + "\n" + pokemon[pokemonSearch[2]]);    
  }else if(pokemonSearch.length == 4) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]] + "\n" + pokemon[pokemonSearch[2]] + "\n" + pokemon[pokemonSearch[3]]);
  }else if(pokemonSearch.length == 5) {
    alert(pokemonSearch.length + " matches:\n" + pokemon[pokemonSearch[0]] + "\n" + pokemon[pokemonSearch[1]] + "\n" + pokemon[pokemonSearch[2]] + "\n" + pokemon[pokemonSearch[3]] + "\n" + pokemon[pokemonSearch[4]]);
  }else {
    alert("No matches found");
  }    
}


