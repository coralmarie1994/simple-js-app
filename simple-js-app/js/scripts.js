//CREATES: IIFE for pokemon array list to print to the page
var pokemonRepository = (function () { 
//CREATES: Array with pokemon name, height & type
  let pokemonList = [
    {
      name:'Pikachu', 
      height:.4, 
      type:'electric'
    },
    {
      name:'Charmander', 
      height:.6, 
      type:'fire'
    },
    {
      name:'Bulbasaur',
      height:.7, 
      type:['grass','poison']
    },
    {
      name:'Squirtle',
      height:.5,
      type:'water'
    },
    {
      name:'Ditto',
      height: .3,
      type:'normal'
    },
    {
      name:'Exeggutor',
      height:2.0,
      type:['grass','psychic']
    },
  ];
<<<<<<< HEAD
  //CREATES: Function to add pokemon to list when required keys included & outside
    function getAll() {
        return pokemonList;
    }
    // CREATES: Function to add pokemon with required keys
    function add(addPokemon) {
        let keysNeeded = ['name', 'height', 'type'];
        if (
            typeof addPokemon === 'object' && // checks if item is an object
            Object.keys(addPokemon).length === keysNeeded.length && // checks if amount of keys in item is the same as the amount defined in keysNeeded
            addPokemon !== null && // prevent typeof null === 'object' quirk
            addPokemon.name !== undefined && // checks if name is defined
            addPokemon.height !== undefined && //checks if height is defined
            addPokemon.type !== undefined // checks if type is defined
        ) {
            pokemonList.push(addPokemon); // add item if expectations are met
        } else {
            console.error('Please provide an object with name, height and type properties') // print error in console, if expectations were not met
        }
    }
    // CREATES: Function to add event listener to button
    function addListenerToButton(button, pokemon) {
        button.addEventListener('click', function () { // Event listener, that listens to 'click'
            showDetails(pokemon); // Call showDetails()-function with pokemon as parameter
        });
    }
    // CREATES: Function to create list items in button with pokemon names
    function addListItem(pokemon) {
        let pokemonsList = document.querySelector('.pokemon-list');
        let listItemPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name; // Text of Button is = name of Pokémon
        button.classList.add('button-class'); // Add a class to the button for easier styling
        addListenerToButton(button, pokemon); // function addListenerTo Button is called and passed with the 2 arguments (button, pokemon)

        listItemPokemon.appendChild(button); // Append button to list item 
        pokemonsList.appendChild(listItemPokemon); // Append list item to ul
    }

    //CREATES: Function to show Pokémon details on console
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    // CREATES: Accessibility from outside of the function
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    }
})();
// CREATES: Filter Search
function findName(nameList, nameSearched) {
    return nameList.filter((addPokemon) =>
        addPokemon.name.toLowerCase().includes(nameSearched.toLowerCase())
    );
}
//CREATES: Run of all Repository
pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
=======
  //CREATES: Function to add pokemon to list when required keys included
  function add(addPokemon) { 
  //CREATES: If/Else for required keys to add(push) pokemon, otherwise log lack of details
      if (typeof addPokemon === 'object' &&
        "name" in addPokemon &&
        "height" in addPokemon &&
        "type" in addPokemon && (typeof addPokemon.type === 'string' || Array.isArray(addPokemon.type))
      ) {
        pokemonList.push(addPokemon);
      } else {
          console.log('pokemon does not have correct details');
      }
  }
  //CREATES: Function to access pokemon list
    function getAll() {
      return pokemonList;
    }
    function addListItem(pokemon){
      let pokemonList = document.querySelector('.pokemon-list'); //selects the class pokemon-list from HTMl
      let listItem = document.createElement('li'); //creates new new pokemon list item 
      let button = document.createElement('button'); //creates new button for each pokemon
      button.innerText = pokemon.name; //sets button text to pokemon name
      button.classList.add('button-class'); //adds class to button
      listItem.appendChild(button); //adds button to list item
      pokemonList.appendChild(listItem); //adds list item to pokemon list
      pokemonDetailsButton(button, pokemon); //creates parameters to pass
    }
    //CREATE: Function to show modal details
    function showPokemonDetails(pokemon) {
      let modal = document.getElementById('pokemon-modal'); // Reference to the modal div
      let modalName = modal.querySelector('.pokemon-name');
      let modalHeight = modal.querySelector('.pokemon-height');
      let modalType = modal.querySelector('.pokemon-type');

    //CREATES: Content of the modal with pokemon details 
    modalName.innerText = pokemon.name;
    modalHeight.innerText = 'Height: ' + pokemon.height;
    if (Array.isArray(pokemon.type)) {
      modalType.innerText = 'Types: ' + pokemon.type.join(', ');
    } else {
      modalType.innerText = 'Type: ' + pokemon.type;
    }

    // Show the modal
    modal.style.display = 'block';
  }

  // Function to handle the closing of the modal
  function closeModal() {
    let modal = document.getElementById('pokemon-modal');
    modal.style.display = 'none';
  }

  // Event listener to close modal if the user clicks outside the modal
  window.onclick = function(event) {
    let modal = document.getElementById('pokemon-modal');
    if (event.target === modal) {
      closeModal();
    }
  }

  // Event listener for closing the modal when the close button is clicked
  document.querySelector('.close').addEventListener('click', closeModal);

  // Function to add event listener to show details in the modal
  function pokemonDetailsButton(button, pokemon) {
    button.addEventListener('click', function() {
      showPokemonDetails(pokemon);
    });
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
  };
})(); 
//CREATES: Auto run get all functions and add pokemon to list upon opening
pokemonRepository.getAll().forEach(function(pokemon) { //returns array of pokemon objects looping through all pokemon in array, add list items
  pokemonRepository.addListItem(pokemon); //adds each pokemon to the list
});
>>>>>>> 190530bf6ff5382b0689f627c04cfad5d27b0e24
