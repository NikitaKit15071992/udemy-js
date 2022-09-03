'use strict'

let numberOFFilms;

function start() {
    numberOFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOFFilms == '' || numberOFFilms == null || isNaN(numberOFFilms)) {
        numberOFFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMoviDB = {
    count: numberOFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', ''),
              b = prompt ('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMoviDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMoviDB.count < 10) {
        console.log('Просмотренно слишком мало фильмов');
    } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMoviDB.count > 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произощла ошибка')
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviDB)
    }
}

showMyDB(personalMoviDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoviDB.genres[i - 1] = genre;
    }
}

writeYourGenres();