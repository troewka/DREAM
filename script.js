const numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

const personMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt("Один із останніх переглянутих фільмів?", "");
const b = prompt("На скільки оціните його?", "");
const c = prompt("Один із останніх переглянутих фільмів?", "");
const d = prompt("На скільки оціните його?", "");

personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;

console.log(personMovieDB);