'use strict';
const personalMoviDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMoviDB.count == '' || personalMoviDB.count == null || isNaN(personalMoviDB.count)) {
            personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt ('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt ('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b !='' && a.length < 50) {
                personalMoviDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMoviDB.count < 10) {
            console.log('Просмотренно слишком мало фильмов');
        } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMoviDB.count > 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произощла ошибка')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMoviDB)
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMoviDB.privat) {
            personalMoviDB.privat = false;
        } else {personalMoviDB.privat = true};
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMoviDB.genres[i - 1] = genres;
            }
        }
        
        personalMoviDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1}} - это ${item}`);
        });
    }
};