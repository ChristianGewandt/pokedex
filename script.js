
let pokemon = [];
let currentPokemon;
let startCount = 1;
let endCount = 80;
let isLoading = false; 



async function loadPokemon() {
    // pokemon/${i}
    
    for (let i = startCount ; i < (endCount); i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemon.push(currentPokemon);
        console.log(`Pokemon${i}`, currentPokemon);
        console.log('test', currentPokemon);
        await renderPokemonInfo(i, currentPokemon);

    }
    isLoading = false
}

function renderPokemonInfo(i, currentPokemon) {
    document.getElementById('content').innerHTML += PokemonSmalCard(i);
    document.getElementById(`pokemon-img${i}`).src = currentPokemon['sprites']['other']['home']['front_default'];
    document.getElementById(`pokemon-name${i}`).innerHTML = currentPokemon['name'];
    document.getElementById(`pokemon-order${i}`).innerHTML = `<a>#${currentPokemon['id']}</a>`;
    document.getElementById(`pokemon-info-card-contaier`).innerHTML = pokemonInfoCard(i);

    if (currentPokemon['types'][0] && currentPokemon['types'][1]) {
        document.getElementById(`pokemon-type-first${i}`).innerHTML = currentPokemon['types'][0]['type']['name'];
        document.getElementById(`pokemon-type-second${i}`).innerHTML = currentPokemon['types'][1]['type']['name'];
        colorSmallCard(i, currentPokemon)

    } else {
        document.getElementById(`pokemon-type-container${i}`).innerHTML = /*html*/`<div class="pokemon-type-first"><span id="pokemon-type-first${i}" class="font-white">${currentPokemon['types'][0]['type']['name']}</span></div>`;
        colorSmallCard(i, currentPokemon)
    }
}

function renderPokemonInfoCard(i) {
    document.getElementById('background-container').classList.remove('d-none');
    document.getElementById('pokemon-info-card-contaier').classList.remove('d-none');
    document.getElementById('pokemon-info-card-contaier').innerHTML = pokemonInfoCard(i);
    document.getElementById(`pokemon-info-card-head-name`).innerHTML = pokemon[i - 1]['name'];
    document.getElementById(`pokemon-info-card-pokemon-img`).src = pokemon[i - 1]['sprites']['other']['home']['front_default'];
    document.getElementById(`pokemon-info-card-head-nr`).innerHTML = `<a>#${pokemon[i - 1]['id']}</a>`;
    setButtonActiveAbout('nav-home-tab', 'green');

    if (pokemon[i - 1]['types'][0] && pokemon[i - 1]['types'][1]) {
        document.getElementById(`pokemon-info-card-head-Typ-one`).innerHTML = pokemon[i - 1]['types'][0]['type']['name'];
        document.getElementById(`pokemon-info-card-head-Typ-two`).innerHTML = pokemon[i - 1]['types'][1]['type']['name'];
        colorInfoCard(i)

    } else {
        document.getElementById(`pokemon-info-card-head-Typ-container`).innerHTML = onlyTypeOne(i);
        colorInfoCard(i)
    }
    document.getElementById('body').style.overflow = 'hidden';
}


// filter names and types 
 function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    


    console.log(search);

    let contencart = document.getElementById('content');
    contencart.innerHTML = '';
    
    
    if (search) {
        
        for (let i = 0; i < pokemon.length; i++) {
            let searchCurrentPokemon = pokemon[i];
            
            if (searchCurrentPokemon['name'].toLowerCase().includes(search)) {
                renderPokemonInfo(i+1, searchCurrentPokemon);   
            }else if (searchCurrentPokemon['types'][0]['type']['name'].toLowerCase().includes(search)) {
                renderPokemonInfo(i+1, searchCurrentPokemon);
                window.removeEventListener ("wheel", loadMoreContent);
            
            }else if (searchCurrentPokemon['types'][0] && searchCurrentPokemon['types'][1]) {
                if (searchCurrentPokemon['types'][1]['type']['name'].toLowerCase().includes(search)){
                    renderPokemonInfo(i+1, searchCurrentPokemon);
                    window.removeEventListener ("wheel", loadMoreContent);
                    
                }                
            }
             
        }  
    } else {
        window.addEventListener ("wheel", loadMoreContent);
        startCount = 1;
        pokemon.length = 0;
        loadPokemon();
    } 
       
}




async function loadMoreContent() {
    // Überprüfen Sie, ob der Benutzer am Ende der Seite angelangt ist
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading) {
        
        startCount = endCount;
        endCount = startCount + 20;
        loadPokemon();
        isLoading = true; 
        
    }
  }

// Fügen Sie ein Scroll-Ereignis hinzu, um die Funktion aufzurufen
window.addEventListener('wheel', loadMoreContent);





















