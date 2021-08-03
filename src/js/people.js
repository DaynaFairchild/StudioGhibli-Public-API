export default function People(people){
    return `
    <h1 class= "sectionTitle">Characters</h1>
    <hr size: "10px" noshade>
    <ul class="peopleList">
    ${people.map(person => {
        return `
        <div>${person.name}</div>
        <ul>
        

        <li>Gender: ${person.gender}</li>
        <li>Age: ${person.age}</li>
        <li>Species: ${person.species}</li>
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

// function fetchThing(filmsURL){
//     console.log(filmsURL);
//     fetch(filmsURL).then (r => r.json()).then(d => {
//         let {title} =d;
//         console.log(title);
//         return title;
//     });
// }