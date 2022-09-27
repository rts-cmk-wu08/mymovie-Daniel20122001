const API_KEY = 'api_key=a068dcb586f22a44b0c64b1b1be088eb';
const popular_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a068dcb586f22a44b0c64b1b1be088eb&language=en-US&page=1'
const upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=a068dcb586f22a44b0c64b1b1be088eb&language=en-US&page=1'

const wrapperElm = document.querySelector(".wrapper");



// --- Header ---

const headerElm = document.createElement('header');
headerElm.classList.add('header_MyMovies');
headerElm.innerHTML = `
<h1>MyMovies</h1>
`
wrapperElm.append(headerElm)

const meainElm = document.createElement('main');



// --- Switch ---

const switchElm = document.createElement('label');
switchElm.classList.add('switch');
switchElm.innerHTML = `
  <input type="checkbox">
  <span class="slider round"></span>
`
headerElm.append(switchElm)



// --- Now Showing Text ---

const nowElm = document.createElement('div');
nowElm.classList.add('now_showing_text');
nowElm.innerHTML = `
<p>Now Showing</p>
`
wrapperElm.append(nowElm)



// --- See more ---

const seeElm = document.createElement('btn');
seeElm.classList.add('see_more_btn');
seeElm.innerHTML = `
<button>See more</button>
`
wrapperElm.append(seeElm)



// --- Upcoming element ---

const upcomingElm = document.createElement('section')
upcomingElm.classList.add('section_upcoming');
wrapperElm.append(upcomingElm)



// Popular Text

const popElm = document.createElement('div');
popElm.classList.add('popular_text');
popElm.innerHTML = `
<p>Popular</p>
`
wrapperElm.append(popElm)



// --- Popular element ---

const popularElm = document.createElement('section')
popularElm.classList.add('section_popular');
wrapperElm.append(popularElm)



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
        showMovies(data.results);
        

        
    })

function showMovies(data) {

    data.forEach(movie => {
        const movieElm = document.createElement('div');
        movieElm.classList.add('upcoming');
        movieElm.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">     
        <h2>${movie.title}</h2>`
        upcomingElm.append(movieElm)

        
    })
}

document.body.append(wrapperElm)



// --- Footer ---

const footerElm = document.createElement('div');
footerElm.classList.add('fixed_footer');
footerElm.innerHTML = `<footer>
<div class= icons><i class="fa-solid fa-film"></i>
<i class="fa-solid fa-ticket-simple"></i>
<i class="fa-solid fa-bookmark"></i></div>
</footer>
`
wrapperElm.append(footerElm)