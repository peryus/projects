import './style.css'
const API_KEY = 'dea49766';
const emptyInfoDiv = document.getElementById('emptyInfo');
const errorDiv = document.getElementById('error');
const resultDiv = document.getElementById('result');
const searchInput = document.getElementById('searchInput');
const loadingDiv = document.getElementById('loading');

searchInput.addEventListener('input', searchTypeHandler);

async function searchTypeHandler(event) {
  setDisplayError(false);
  showHideEmpty(false);
  const value = (event.target.value || '').trim();
  console.log(value);
  if (!value || value.length < 3) {
    showHideEmpty(true);
    resultDiv.innerHTML = '';
    return;
  }

  const movies = await searchMovies(value);
  if (movies.length === 0) {
    setDisplayResults(false)
    return;
  }
  movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  showMovies(movies);
}
function showMovies(movies) {
  let htmlToInsert = '';
  movies.forEach(movie => {
    htmlToInsert += `
    <div class="movie">
    <h3>${movie.Title} (${movie.Year})</h3>
    <img src="${movie.Poster}" alt="Movie poster">
</div>
    `

  })
  resultDiv.innerHTML = htmlToInsert;
  setDisplayResults(true);
}

async function searchMovies(query) {
  setDisplayLoading(true);
  let movies = [];
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const movieData = await response.json();
    if (movieData.Response === 'False') {
      throw new Error(movieData.Error);
    }
    movies = movieData.Search;
  } catch (error) {
    console.log(error);
    resultDiv.innerHTML = '';
    setDisplayResults(false);
    errorDiv.innerHTML = error.message;
    setDisplayError(true);
  } finally {
    setDisplayLoading(false);
  }

  return movies;
}
function setDisplayResults(isShow) {
  resultDiv.classList.toggle('hidden' , !isShow);
}

function setDisplayLoading(isShow) {
  loadingDiv.classList.toggle('hidden', !isShow);
}

function showHideEmpty(isShow) {
  emptyInfoDiv.classList.toggle('hidden', !isShow);
}

function setDisplayError(isShow) {
  errorDiv.classList.toggle('hidden', !isShow);
}