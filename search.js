function nameSearch() {
  var nameInput = document.getElementById("s-name");
  nameInput = nameInput.value.toUpperCase();
  var ul = document.getElementById("pokedex");
  var li = ul.getElementsByTagName("li");
  var checkLetters = /^[A-Za-z]+$/;
  var span;
  var textSearch;
  var num = 0;
  var vali = true;
  var pokemon = [];

  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[0];
    textSearch = span.textContent || span.innerText;
    if (nameInput.match(checkLetters) && nameInput.length < 20 && textSearch.toUpperCase().indexOf(nameInput) > -1 && vali) {
      pokemon.push(textSearch);
      num++;
      if (num == 5) {
        vali = false;
      }
    }else if(nameInput.length >= 20) {
        alert("Cannot enter more than 20 characters");
        break;
    }else if(!nameInput.match(checkLetters)) {
        alert("Must enter only a-z and A-Z");
        break;
    }else if(nameInput.length >= 20 && !nameInput.match(checkLetters)) {
        alert("Cannot enter more than 20 characters \n Must enter only a-z and A-Z");
        break;
    }    
  }

  if(pokemon.length == 1) {
    alert(pokemon.length + " matches:\n" + pokemon[0]);
  }else if(pokemon.length == 2) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1]);
  }else if(pokemon.length == 3) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1] + "\n" + pokemon[2]);
  }else if(pokemon.length == 4) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1] + "\n" + pokemon[2] + "\n" + pokemon[3]);
  }else if(pokemon.length == 5) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1] + "\n" + pokemon[2] + "\n" + pokemon[3] + "\n" + pokemon[4]);
  }else {
    alert("No matches found");
  }
}


function numSearch() {
  var numInput = document.getElementById("s-num");
  numInput = numInput.value;
  var ul = document.getElementById("pokedex");
  var li = ul.getElementsByTagName("li");
  var span;
  var numSearch;
  var num = 0;
  var vali = true;
  var pokemon = [];

  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[0];
    numSearch = span.textContent || span.innerText;
    if (numInput >= 1 && numInput <= 20 && numSearch.indexOf(numInput) > -1 && vali) {
      pokemon.push(numSearch);
      num++;
      if (num == 5) {
        vali = false;
      }
    }else if(numInput < 1 || numInput > 20) {
        alert("Must enter number 1-20");
        break;
    }
  }

  if(pokemon.length == 1) {
    alert(pokemon.length + " matches:\n" + pokemon[0]);
  }else if(pokemon.length == 2) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1]);
  }else if(pokemon.length == 3) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1] + "\n" + pokemon[2]);
  }else if(pokemon.length == 4) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1] + "\n" + pokemon[2] + "\n" + pokemon[3]);
  }else if(pokemon.length == 5) {
    alert(pokemon.length + " matches:\n" + pokemon[0] + "\n" + pokemon[1] + "\n" + pokemon[2] + "\n" + pokemon[3] + "\n" + pokemon[4]);
  }else {
    alert("No matches found");
  }     
}

//to do: search when enter key is pressed, add pokemon descriptions to search
