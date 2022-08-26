const numberOFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviDB = {
    count: numberOFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;

console.log(personalMoviDB);