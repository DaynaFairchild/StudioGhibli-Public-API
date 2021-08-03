export default function Species(species){
    return `
    <h1 class= "sectionTitle">Species</h1>
    <hr size: "10px" noshade>
    <ul>
    ${species.map(species => {
        return `
        <div>${species.name}</div>
        <ul>
        <li>Gender: ${species.clasification}</li>
        <li>Age: ${species.eye_color}</li>
        <li>${species.hair_color}</li>
        <li>${species.filmsid}</li>
        <br>
        <hr size: "10px" noshade>
        </ul>
         <br>

         `;
     }).join('')}  
     </ul> 
    `;
}