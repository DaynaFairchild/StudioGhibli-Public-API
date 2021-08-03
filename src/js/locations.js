export default function Locations(locations){
    return `
    <h1 class= "sectionTitle">Locations</h1>
    <hr size: "10px" noshade>
    <ul class="locationsList">
    ${locations.map(location => {
        return `
        <div>${location.name}</div>
        <ul>
        <li>Gender:Climate: ${location.climate}</li>
        <li>Age:Terrain: ${location.terrain}</li>
        <li>Water surface precentage: ${location.surface_water}%</li>
        <br>
        <hr size: "10px" noshade>
        </ul>
         <br>

         `;
     }).join('')}  
     </ul> 
    `;
}