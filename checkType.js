// Pokemon dark-color for frame and type backgroundcolor
const COLOR_NORMAL = '#695f4a';
const COLOR_FIRE = '#9a1b01';
const COLOR_WATER = '#0053a7';
const COLOR_ELECTRIC = '#bd8a05';
const COLOR_GRASS = '#349704';
const COLOR_ICE = '#00839f';
const COLOR_FIGHTING = '#562010';
const COLOR_POISON = '#67275c';
const COLOR_GROUND = '#8f6e15';
const COLOR_FLYING = '#6072bd';
const COLOR_PSYCHIC = '#a72e59';
const COLOR_BUG = '#828f11';
const COLOR_ROCK = '#715e20';
const COLOR_GHOST = '#2a2a73';
const COLOR_DRAGON = '#442bb1';
const COLOR_DARK = '#30251e';
const COLOR_STEEL = '#818197';
const COLOR_FAIRY = '#c758c7';

// Color style the smal Pokemoncard
function setPokemonCardColor(i, typeColor, from, to, currentPokemon) {
    document.getElementById(`pokemon-card-background-color${i}`).style.background = `linear-gradient(to right bottom,${from} 0,${to} 50%)`;
    document.getElementById(`pokemon-card-background-color${i}`).style.border = `3px solid ${typeColor}`;
    if (currentPokemon['types'][0] && currentPokemon['types'][1]) {
        document.getElementById(`pokemon-type-first${i}`).style.background = typeColor;
        document.getElementById(`pokemon-type-second${i}`).style.background = typeColor;
    } else {
        document.getElementById(`pokemon-type-first${i}`).style.background = typeColor;
    }
}

// Which type belongs to which color of small Pokemon card
function colorSmallCard(i, currentPokemon) {
    const typeName = currentPokemon['types'][0]['type']['name'];


    if (typeName == 'normal') {
        setPokemonCardColor(i, COLOR_NORMAL, '#ada594', '#887a5d', currentPokemon);

    } else if (typeName == 'fire') {
        setPokemonCardColor(i, COLOR_FIRE, '#f75231', '#c13b20', currentPokemon);

    } else if (typeName == 'water') {
        setPokemonCardColor(i, COLOR_WATER, '#399cff', '#1172d4', currentPokemon);

    } else if (typeName == 'electric') {
        setPokemonCardColor(i, COLOR_ELECTRIC, '#ffc631', '#d69c06', currentPokemon);

    } else if (typeName == 'grass') {
        setPokemonCardColor(i, COLOR_GRASS, '#7bce52', '#50a228', currentPokemon);

    } else if (typeName == 'ice') {
        setPokemonCardColor(i, COLOR_ICE, '#5acee7', '#0fa0bf', currentPokemon);

    } else if (typeName == 'fighting') {
        setPokemonCardColor(i, COLOR_FIGHTING, '#a55239', '#772c16', currentPokemon);

    } else if (typeName == 'poison') {
        setPokemonCardColor(i, COLOR_POISON, '#b55aa5', '#843175', currentPokemon);

    } else if (typeName == 'ground') {
        setPokemonCardColor(i, COLOR_GROUND, '#d6b55a', '#a7811a', currentPokemon);

    } else if (typeName == 'flying') {
        setPokemonCardColor(i, COLOR_FLYING, '#9cadf7', '#6a7fd8', currentPokemon);

    } else if (typeName == 'psychic') {
        setPokemonCardColor(i, COLOR_PSYCHIC, '#ff73a5', '#c13466', currentPokemon);

    } else if (typeName == 'bug') {
        setPokemonCardColor(i, COLOR_BUG, '#adbd21', '#92a112', currentPokemon);

    } else if (typeName == 'rock') {
        setPokemonCardColor(i, COLOR_ROCK, '#bda55a', '#806D33', currentPokemon);
    } else if (typeName == 'ghost') {
        setPokemonCardColor(i, COLOR_GHOST, '#6363b5', '#36368e', currentPokemon);

    } else if (typeName == 'dragon') {
        setPokemonCardColor(i, COLOR_DRAGON, '#7b63e7', '#4e33c3', currentPokemon);

    } else if (typeName == 'dark') {
        setPokemonCardColor(i, COLOR_DARK, '#735a4a', '#44352b', currentPokemon);

    } else if (typeName == 'steel') {
        setPokemonCardColor(i, COLOR_STEEL, '#adadc6', '#79799c', currentPokemon);

    } else if (typeName == 'fairy') {
        setPokemonCardColor(i, COLOR_FAIRY, '#e6a5e6', '#ca70ca', currentPokemon);
    }
}

// Style of button about, stats, moves
const BUTTON_INACTIVE = (c) => `border-bottom: 5px solid ${c}; border-left: 0; border-right: 0; border-top: 0; color: grey;`;
const BUTTON_ACTIVE_ABOUT = (c) => `border-top: 5px solid ${c}; border-left: 0; border-right: 5px solid ${c}; border-top-left-radius: 0; font-weight: 700;  color: ${c};`;
const BUTTON_ACTIVE_STATES = (c) => `border-top: 5px solid ${c}; border-left: 5px solid ${c}; border-right: 5px solid ${c};font-weight: 700; color: ${c};`;
const BUTTON_ACTIVE_MOVES = (c) => `border-top: 5px solid ${c}; border-left: 5px solid ${c}; border-right: 0; border-top-right-radius: 0; font-weight: 700; color: ${c};`;

function setStyle(id, style) {
    document.getElementById(id).style = style;
}

function setButtonActiveAbout(id, color) {
    setStyle('nav-home-tab', BUTTON_INACTIVE(color));
    setStyle('nav-profile-tab', BUTTON_INACTIVE(color));
    setStyle('nav-contact-tab', BUTTON_INACTIVE(color));
    setStyle(id, BUTTON_ACTIVE_ABOUT(color));
}

function setButtonActiveStates(id, color) {
    setStyle('nav-home-tab', BUTTON_INACTIVE(color));
    setStyle('nav-profile-tab', BUTTON_INACTIVE(color));
    setStyle('nav-contact-tab', BUTTON_INACTIVE(color));
    setStyle(id, BUTTON_ACTIVE_STATES(color));
}

function setButtonActiveMoves(id, color) {
    setStyle('nav-home-tab', BUTTON_INACTIVE(color));
    setStyle('nav-profile-tab', BUTTON_INACTIVE(color));
    setStyle('nav-contact-tab', BUTTON_INACTIVE(color));
    setStyle(id, BUTTON_ACTIVE_MOVES(color));
}

// Color style the infopokemoncard
function SetColorInfoCard(i, typeColor, from, to, k) {
    document.getElementById(`pokemon-info-card-contaier`).style.background = `linear-gradient(to right bottom,${from} 0,${to} 50%)`;
    document.getElementById(`pokemon-info-card-contaier`).style.border = `4px solid ${typeColor}`;
    document.getElementById(`pokemon-info-card-body`).style.borderTop = `4px solid ${typeColor}`;
    document.getElementById('pokemon-info-card-head-pokemon-silder-right').style.background = typeColor;
    document.getElementById('pokemon-info-card-head-pokemon-silder-left').style.background = typeColor;
    document.getElementById('pokemon-info-card-head-a').style.background = typeColor;
    document.getElementById(`pokemon-info`).style.cssText = `background:${typeColor}; padding: 5px; border-radius: 5px; margin-top: 20px;`;
    document.getElementById('nav-tab').innerHTML = `<button onclick="setButtonActiveAbout('nav-home-tab', '${typeColor}')" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About</button>
                                                                        <button onclick="setButtonActiveStates('nav-profile-tab', '${typeColor}')" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Stats</button>
                                                                        <button onclick="setButtonActiveMoves('nav-contact-tab', '${typeColor}')" class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Moves</button>`;
    // document.getElementById('nav-contact').style.
    if (pokemon[i - 1]['types'][0] && pokemon[i - 1]['types'][1]) {
        document.getElementById(`pokemon-info-card-head-Typ-one`).style.background = typeColor;
        document.getElementById(`pokemon-info-card-head-Typ-two`).style.background = typeColor;
    } else {
        document.getElementById(`pokemon-info-card-head-Typ-one`).style.background = typeColor;
    }

    setButtonActiveAbout(`nav-home-tab`, typeColor);
    aboutBackgroundcolor(from, to);
    infoCardAbout(i)
    infoCardStates(i, from, to);
    pokemonMoves(i, from, to);
}

// Which type belongs to which color of infopokemoncard
function colorInfoCard(i) {
    const typePokemon = pokemon[i - 1]['types'][0]['type']['name'];

    if (typePokemon == 'normal') {
        SetColorInfoCard(i, COLOR_NORMAL, '#ada594', '#887a5d');

    } else if (typePokemon == 'fire') {
        SetColorInfoCard(i, COLOR_FIRE, '#f75231', '#c13b20');

    } else if (typePokemon == 'water') {
        SetColorInfoCard(i, COLOR_WATER, '#399cff', '#1172d4');

    } else if (typePokemon == 'electric') {
        SetColorInfoCard(i, COLOR_ELECTRIC, '#ffc631', '#d69c06');

    } else if (typePokemon == 'grass') {
        SetColorInfoCard(i, COLOR_GRASS, '#7bce52', '#50a228');

    } else if (typePokemon == 'ice') {
        SetColorInfoCard(i, COLOR_ICE, '#5acee7', '#0fa0bf');

    } else if (typePokemon == 'fighting') {
        SetColorInfoCard(i, COLOR_FIGHTING, '#a55239', '#772c16');

    } else if (typePokemon == 'poison') {
        SetColorInfoCard(i, COLOR_POISON, '#b55aa5', '#843175');

    } else if (typePokemon == 'ground') {
        SetColorInfoCard(i, COLOR_GROUND, '#d6b55a', '#a7811a');

    } else if (typePokemon == 'flying') {
        SetColorInfoCard(i, COLOR_FLYING, '#9cadf7', '#6a7fd8');

    } else if (typePokemon == 'psychic') {
        SetColorInfoCard(i, COLOR_PSYCHIC, '#ff73a5', '#c13466');

    } else if (typePokemon == 'bug') {
        SetColorInfoCard(i, COLOR_BUG, '#adbd21', '#92a112');

    } else if (typePokemon == 'rock') {
        SetColorInfoCard(i, COLOR_ROCK, '#bda55a', '#9e832e');

    } else if (typePokemon == 'ghost') {
        SetColorInfoCard(i, COLOR_GHOST, '#6363b5', '#36368e');

    } else if (typePokemon == 'dragon') {
        SetColorInfoCard(i, COLOR_DRAGON, '#7b63e7', '#4e33c3');

    } else if (typePokemon == 'dark') {
        SetColorInfoCard(i, COLOR_DARK, '#735a4a', '#44352b');

    } else if (typePokemon == 'steel') {
        SetColorInfoCard(i, COLOR_STEEL, '#adadc6', '#79799c');

    } else if (typePokemon == 'fairy') {
        SetColorInfoCard(i, COLOR_FAIRY, '#e6a5e6', '#ca70ca');

    }
}

//parameter infocard about 
function infoCardAbout(i) {
    document.getElementById('pokemon-height').innerHTML = `<span>${pokemon[i - 1]['height'] / 10}</span><span> m</span>`;
    document.getElementById('pokemon-weight').innerHTML = `<span>${pokemon[i - 1]['weight'] / 10}</span><span> kg</span>`;

    for (let j = 0; j < pokemon[i - 1]['abilities'].length; j++) {
        const pokemonAbout = pokemon[i - 1]['abilities'][j];

        document.getElementById('pokemon-abilities').innerHTML += `${pokemonAbout['ability']['name']}, `;
    }
}

function aboutBackgroundcolor(from, to) {
    document.getElementById('pokemon-height').style = `margin-left: 5px;font-weight: bold; color: white; background: linear-gradient(to right bottom,${from} 0,${to} 50%); padding: 7px; border-radius: 3px; padding-top: 1px; padding-bottom: 1px;`;
    document.getElementById('pokemon-weight').style = `margin-left: 5px;font-weight: bold; color: white; background: linear-gradient(to right bottom,${from} 0,${to} 50%); padding: 7px; border-radius: 3px; padding-top: 1px; padding-bottom: 1px;`;
    document.getElementById('pokemon-abilities').style = `margin-left: 5px;font-weight: bold; color: white; background: linear-gradient(to right bottom,${from} 0,${to} 50%); padding: 7px; border-radius: 3px; padding-top: 1px; padding-bottom: 6px;`;
}



// parameter infocard stats
function infoCardStates(i, from, to) {


    for (let k = 0; k < pokemon[i - 1]['stats'].length; k++) {
        const element = pokemon[i - 1]['stats'][k]['base_stat'];

        document.getElementById('nav-profile').innerHTML += `
        <div class="stats-points-container">
            <span id="stats-points${k}"></span>
            <div id="progress-bar-container" class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div id="progress-bar${k}" class="progress-bar " style="width:${element + '%'}; background: linear-gradient(to right bottom,${from} 0,${to} 50%); border-top-right-radius: 5px;border-bottom-right-radius: 5px;">25%</div>
            </div>
        </div>
        `;
        document.getElementById(`progress-bar${k}`).innerHTML = `${pokemon[i - 1]['stats'][k]['base_stat']}%`;

    }
    StatesPoints();
}

// parameter infoCard moves
function pokemonMoves(i, from, to) {

    for (let l = 0; l < pokemon[i - 1]['moves'].length; l++) {
        const pokemonMove = pokemon[i - 1]['moves'][l]['move']['name'];

        document.getElementById(`all-moves-container`).innerHTML += `<div class="pokemonmove" style="background: linear-gradient(to right bottom,${from} 0,${to} 50%); border-radius: 5px; margin: 5px; color: white;padding-left: 5px; padding-right: 5px;">${pokemonMove}</div>`;
    }
}

function StatesPoints() {
    document.getElementById('stats-points0').innerHTML = `<b class="states-points-color">Hp</b>`;
    document.getElementById('stats-points1').innerHTML = `<b class="states-points-color">Attack</b>`;
    document.getElementById('stats-points2').innerHTML = `<b class="states-points-color">Defence</b>`;
    document.getElementById('stats-points3').innerHTML = `<b class="states-points-color">Sp. Attack</b>`;
    document.getElementById('stats-points4').innerHTML = `<b class="states-points-color">Sp. Defence</b>`;
    document.getElementById('stats-points5').innerHTML = `<b class="states-points-color">Speed</b>`;
}


// Calls up the previous Pokemon when you click the left arrow. 
function previousPokemon(i) {

    if (i < 2) {

        i = pokemon.length;
        renderPokemonInfoCard(i);

    } else if (i <= pokemon.length) {
        i--;
        renderPokemonInfoCard(i);
    }
}

// Calls up the next Pokemon when you click the right arrow.
function nextPokemon(i) {

    if (i >= pokemon.length) {

        i = 1;
        renderPokemonInfoCard(i);

    } else if (i <= pokemon.length) {
        i++;
        renderPokemonInfoCard(i);
    }
}












