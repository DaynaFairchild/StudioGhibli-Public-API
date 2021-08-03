
export default function Films(films) {
    return`
    <h1 class= "sectionTitle">Movies</h1>
    <hr size: "10px" noshade>
    <ul class="filmsList">
    ${films.map(film => {
        return `
             <li  id="${film.id}">
               <div id="${film.id}" class ="filmTitle">${film.original_title} 
                 <br>
                 ${film.title} </div>
               
                 <br>
                <div class= "director"> Directed by ${film.director}</div>
                 <br>
                 ${film.description}
                 <br>
                 <hr size: "10px" noshade>
             </li>
             <br>
         `;
     }).join('')}  
     </ul> 
    `;
}
