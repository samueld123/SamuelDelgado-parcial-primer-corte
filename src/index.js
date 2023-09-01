import RickAndMortyService from './service';

const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

// valor (1 punto)
var allEvents = [];

function createCharacterList() {

    const container = document.getElementById("container-list");
    service.getAllCharacters()
    .then(characters => {
        characters.forEach(character => {
            const characterCard = createCharacterCard(character);
            container.innerHTML += characterCard;
        });
        addCharacterListeners(characters);
    })
    .catch(error => {
        console.error("Ocurrió el siguiente error: ", error)
    });
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo



// deberás usar los elementos correctos de HTML para poder visualizar el personaje

// valor (1 punto) HTML

function createCharacterCard(character) {
    
    return `<div class="character-card" id="${character.name}">
        <img src=${character.image} alt="QR Code">
        <div class = "character-desc">
            <span class = "character-name">${character.name}</span>
            <div class = "character-data">
                <span class = "dot" style = "background-color: var(--${character.status})"></span>
                <span>${character.status} - ${character.species}</span>
            </div>
            <div class = "locations-container">
                <p>Last known location:</p>
                <p class = "character-locations">${character.location}</p>
                <p>First seen in:</p>
                <p class = "character-locations">${character.firstSeen}</p>
            </div>
        </div>
    </div>`
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click
// cuando se seleccione un personaje debe decir hola soy 'nombre personaje', recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners() {
    const characters = document.querySelectorAll('.character-card');
    characters.forEach(element => {
        const nameElement = element.querySelector('.character-name');
        nameElement.addEventListener('click', () => {
            console.log(`Hola, soy ${nameElement.textContent}`);
        });
    });
}

// por último se llama la función y se renderiza la vista
createCharacterList();
