export default function Film(film) {
return `
<h1 id="${film.id}">${film.title}</h1>
<hr size: "10px" noshade>
<div>${film.original_title}
    ${film.description}
    ${film.director}
    ${film.producer}
    ${film.release_date}
    ${film.runng_time}
    ${film.rt_score}
    ${film.people}
    ${film.species}
</div>`;
}