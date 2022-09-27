const API_KEY = 'api_key=a068dcb586f22a44b0c64b1b1be088eb';
const popular_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a068dcb586f22a44b0c64b1b1be088eb&language=en-US&page=1'
const upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=a068dcb586f22a44b0c64b1b1be088eb&language=en-US&page=1'



// --- Popular ---

fetch(popular_URL).then(res => res.json()).then(data => {
    console.log(data);
    show_popular(data.results);
    
})

function show_popular(data) {

    data.forEach(movie => {
        const movieElm = document.createElement('div');
        movieElm.classList.add('popular');
        movieElm.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">     
        <h2>${movie.title}</h2>`
        popularElm.append(movieElm)
    })
}



// --- Upcoming ---

fetch(upcoming_URL).then(res => res.json()).then(data => {
    console.log(data);
    show_upcoming(data.results);
    
})

function show_upcoming(data) {

    data.forEach(movie => {
        const movieElm = document.createElement('div');
        movieElm.classList.add('upcoming');
        movieElm.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">     
        <h2>${movie.title}</h2>`
        upcomingElm.append(movieElm)
    })
}