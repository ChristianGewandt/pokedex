
function PokemonSmalCard(i) {
  return /*html*/`   
<div onclick="renderPokemonInfoCard(${i})"  id="pokemon-card-background-color${i}" class="card pokemon-card-background-color hover-effect "  style="width: 225px; height: 150px; margin: 20px; box-shadow: 10px 10px 7px #787878;">
  <div  class="pokemon-card-header">
      <div ><h4 id="pokemon-name${i}" class="pokemon-name-color"></h4></div>
      <div ><b id="pokemon-order${i}"></b></div>
  </div>
  <div id="pokemon-card-body" class="pokemon-card-body">
      <div class="pokemon-type-and-img-continer">
        <div id="pokemon-type-container${i}" class="pokemon-type-container">
          <div id="pokemon-type-first-container" >
            <div class="pokemon-type-first" >
                <span id="pokemon-type-first${i}" class="font-white"></span>
            </div>
          </div>
          <div id="pokemon-type-second-container" class="pokemon-type-container">
            <div class="pokemon-type-second" >
                <span id="pokemon-type-second${i}"  class="font-white"></span>
            </div>  
          </div>
        </div>
        <div class="pokemon-img-container">
            <img id="pokemon-img${i}" class="pokemon-img"/>
        </div> 
      </div>
      
  </div>
  
</div>
    
    `;
}

function pokemonInfoCard(i) {
  return /*html*/`
  
    <div id="pokemon-info-card-head" class="pokemon-info-card-head">
        <div class="pokemon-info-card-head-close-X">
          <div id="pokemon-info-card-head-a" class="pokemon-info-card-head-a" href=""><b onclick="closeInfoPokemonCard()">X</b></div>
        </div>
        <div id="pokemon-info-card-head-name-nr-contianer" class="pokemon-info-card-head-name-nr-contianer">
          <div><b id="pokemon-info-card-head-name">Name</b></div>
          <div><b id="pokemon-info-card-head-nr">NR.</b></div>
        </div>
        <div id="pokemon-info-card-head-Typ-container" class="pokemon-info-card-head-Typ-container">
          <div id="pokemon-info-card-head-Typ-one" class="pokemon-info-card-head-Typ-one">Typ1</div>
          <div id="pokemon-info-card-head-Typ-two" class="pokemon-info-card-head-Typ-two">Typ2</div>
        </div>
        <div class="pokemon-info-card-head-pokemon-img-and-slider-container">
          <div onclick="previousPokemon(${i})" id="pokemon-info-card-head-pokemon-silder-right" class="pokemon-info-card-head-pokemon-silder-left"><</div>
          <div class="pokemon-info-card-head-pokemon-img">
            <img id="pokemon-info-card-pokemon-img" class="pokemon-info-card-pokemon-img" src="" alt="">
          </div>
          <div onclick="nextPokemon(${i})" id="pokemon-info-card-head-pokemon-silder-left" class="pokemon-info-card-head-pokemon-silder-right">></div>
        </div>

      </div>
      <div id="pokemon-info-card-body" class="pokemon-info-card-body">
        <div class="pokeball-icon-container">
            <div class="pokemon-info-container">
                <b id="pokemon-info">Pokemon Info</b>
            </div>
            
        </div> 
        <div class=nav-tab-container>
        <nav>
        <div class="nav nav-tabs border-0" id="nav-tab" >
            <button onclick="setButtonActiveAbout('nav-home-tab')" class="nav-link active " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"  >About</button>
            <button onclick="setButtonActiveStates('nav-profile-tab')" class="nav-link " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" >>Stats</button>
            <button onclick="setButtonActiveMoves('nav-contact-tab')" class="nav-link " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" tabindex="-2">>Moves</button>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="height-container generally-hei-wei-abi-container">
            <span>Height:</span>
            <span id="pokemon-height" class="generally-hei-wei-abi"></span>
          </div>
          <div class="weight-container generally-hei-wei-abi-container">
            <span>Weight:</span>
            <span id="pokemon-weight" class="generally-hei-wei-abi"></span>
          </div>
          <div class="abilities-container generally-hei-wei-abi-container">
            <span>Abilities:</span>
            <span id="pokemon-abilities" class="generally-hei-wei-abi"></span>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
        <div class="tab-pane fade nav-contact" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <div class="all-moves-container" id="all-moves-container"></div>
        </div>
    </div>
        </div>
      
        
       
    </div>
  
    `
}

function onlyTypeOne(i) {
  return /*html*/`
    <div class="pokemon-type-first">
        <span id="pokemon-info-card-head-Typ-one" class="font-white" style="">${pokemon[i - 1]['types'][0]['type']['name']}</span>
    </div>
    `
}

function aboutAndEvolution() {
  return /*html*/`
    <div id="about-abitlities" class="about"></div>
    <div id="about-height" class="about"></div>
    <div id="about-weight" class="about"></div>
    <div id="about-abitlities" class="about"></div>
    <div id="about-abitlities" class="about"></div>
    `;

}

function closeInfoPokemonCard() {
  document.getElementById('background-container').classList.add('d-none');
  document.getElementById('body').style.overflow = 'visible';
}



