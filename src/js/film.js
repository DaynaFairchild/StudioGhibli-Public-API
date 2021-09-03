export default function Film(film) {
return `
<h1 id="${film.id}">${film.title}</h1>
<hr size: "10px" noshade>
<div>
<h2>${film.original_title}</h2>
    <h4>Director: ${film.director}</h4>
    <h4>Producer: ${film.producer}</h4>
    <h4>Release Date: ${film.release_date}</h4>

    ${film.description}
  
    <h4>Rotten Tomatoes Score: ${film.rt_score}%<h4>
   <h4> Characters: ${film.people} <h4>
   
</div>`;
}
// <h4>Film Run Time: ${film.runng_time}</h4>
//<h4> ${film.species} <h4>