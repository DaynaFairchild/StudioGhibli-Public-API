import Films from "./films";
import People from "./people";
// import Species from "./species";
import About from "./about";
import Locations from "./locations";
import Film from "./film";

const appDiv = document.getElementById("app");
const studioGhibliBaseURL ="https://ghibliapi.herokuapp.com";
const filmsURL ="https://ghibliapi.herokuapp.com/films";
const peopleURL ="https://ghibliapi.herokuapp.com/people";
//const speciesURL ="https://ghibliapi.herokuapp.com/species";
const locationsURL ="https://ghibliapi.herokuapp.com/locations";
const fimURL ="https://ghibliapi.herokuapp.com/films/"

export default () => {
    
    navFilms();
    navPeople();
    //navSpecies();
    navAbout();
    navLocations();
}

function getRequestFilms(location, callback) {
    fetch(filmsURL)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(err => console.log(err));
}

function clickFilmFetch(location, callback) {
    fetch(`https://ghibliapi.herokuapp.com/films/${location}`)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(err => console.log(err));
}

function navLocations(){
    const locationsNavBtn = document.querySelector(".nav_locations");
    locationsNavBtn.addEventListener('click', function() {
        getRequestLocations(locationsURL, data => {
            appDiv.innerHTML = Locations(data);
        });
    });
}

function getRequestLocations(location, callback) {
    fetch(locationsURL)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(err => console.log(err));
}

function getRequestPeople(location, callback) {
    fetch(peopleURL)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(err => console.log(err));
       
}

// function getRequestSpecies(location, callback) {
//     fetch(speciesURL)
//         .then(response => response.json())
//         .then(data => {
//             callback(data);
//         })
//         .catch(err => console.log(err));
// }

function navFilms() {

    const filmsNavBtn = document.querySelector(".nav_films");
    filmsNavBtn.addEventListener('click', function() {
        getRequestFilms(filmsURL, data => {
            appDiv.innerHTML = Films(data);
            clickFilm(data);
            
        });
        
    });
    
}

function navPeople(){
    const peopleNavBtn = document.querySelector(".nav_people");
    peopleNavBtn.addEventListener('click', function() {
        getRequestPeople(peopleURL, data => {
            appDiv.innerHTML = People(data);
        });
    });
}
//function navSpecies(){
//     const speciesNavBtn = document.querySelector(".nav_species");
//     speciesNavBtn.addEventListener('click', function() {
//         getRequestSpecies(speciesURL, data => {
//             appDiv.innerHTML = Species(data);
//         });
//     });
// }

function navAbout(){
    const aboutNavBtn = document.querySelector(".nav_about");
    aboutNavBtn.addEventListener('click', function() {
        appDiv.innerHTML = About();
    });
}

function clickFilm(listOfFilms){
    listOfFilms.forEach(item => {
        const filmNavBtn = document.getElementById(item.id);
        filmNavBtn.addEventListener('click', function() {
             clickFilmFetch(item.id, data => {
                 appDiv.innerHTML = Film(data);
             });
         });
    });

 }

