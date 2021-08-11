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
        <li>Films: ${person.films}</li>  
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