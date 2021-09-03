export default function People(people){
    return `
    <h1 class= "sectionTitle">Characters</h1>
    <hr size: "10px" noshade>
    <ul class="peopleList">
    ${people.map((person,index) => {
        return `
        <div>${person.name}</div>
        <ul>
        

        <li>Gender: ${person.gender}</li>
        <li>Age: ${person.age}</li>
        <li id="${"speciesName" + index}">Species: ${fetchSpecies(person.species, index)}</li>
         
        <br>
                 <hr size: "10px" noshade>
        </ul>
         <br>

         `;
     }).join('')}  
     </ul> 
    `;
   
        

}


// function getPeopleFilms(location, callback) {
//     fetch(person.films(person.id))
//         return title;
// }

 function fetchSpecies(speciesURL, index){
    fetch(speciesURL).then (r => r.json()).then(d => {
        let speciesElement = document.getElementById("speciesName" + "" + index);
        speciesElement.innerText = "Species: " + d.name;
    });
 }
 // <li id="${"films" + index}">Films: ${fetchFilm(person.films, index)}</li> 

 
//  function fetchFilm(filmsURL, index){
//     fetch(filmsURL).then (r => r.json()).then(d => {
//         let filmElement = document.getElementById("films" + "" + index);
//         filmElement.innerText = "Films: " + d.name;
//     });
//  }