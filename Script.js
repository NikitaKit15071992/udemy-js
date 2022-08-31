const numberOFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviDB = {
    count: numberOFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b !='' && a.length < 50) {
        personalMoviDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMoviDB.count < 10) {
    console.log('Просмотренно слишком мало фильмов');
} else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMoviDB.count > 30) {
    console.log('Вы киноман')
} else {
    console.log('Произощла ошибка')
}

console.log(personalMoviDB);

