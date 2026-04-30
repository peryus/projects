const API_KEY: string = 'dea49766';

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface OmdbSuccessResponse {
    Response: 'True';
    Search: Movie[];
    totalResults: string;
}

interface OmdbErrorResponse {
    Response: 'False';
    Error: string;
}

type OmdbResponse = OmdbSuccessResponse | OmdbErrorResponse;

const emptyInfoDiv = document.getElementById('emptyInfo') as HTMLDivElement;
const errorDiv = document.getElementById('error') as HTMLDivElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const loadingDiv = document.getElementById('loading') as HTMLDivElement;

searchInput.addEventListener('input', searchTypeHandler);

async function searchTypeHandler(event: Event): Promise<void>  {
  setDisplayError(false);
  showHideEmpty(false);
    const target = event.target as HTMLInputElement;
    const value: string = target.value.trim();
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
  movies.sort((a: Movie, b: Movie): number => parseInt(b.Year) - parseInt(a.Year));
  showMovies(movies);
}
function showMovies(movies: Movie[]): void  {
    let htmlToInsert: string = '';
    movies.forEach((movie: Movie): void => {
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

async function searchMovies(query: string): Promise<Movie[]> {
  setDisplayLoading(true);
    let movies: Movie[] = [];
  try {
      const response: Response = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
      const movieData = (await response.json()) as OmdbResponse;
    if (movieData.Response === 'False') {
      throw new Error(movieData.Error);
    }
    movies = movieData.Search;
  } catch (error: unknown) {
    console.log(error);

    resultDiv.innerHTML = '';
    setDisplayResults(false);

    if (error instanceof Error) {
        errorDiv.innerHTML = error.message;
    } else {
        errorDiv.innerHTML = 'Unknown error';
    }

    setDisplayError(true);
} finally {
    setDisplayLoading(false);
  }

  return movies;
}
function setDisplayResults(isShow: boolean): void {
    resultDiv.classList.toggle('hidden', !isShow);
}

function setDisplayLoading(isShow: boolean): void {
    loadingDiv.classList.toggle('hidden', !isShow);
}

function showHideEmpty(isShow: boolean): void {
    emptyInfoDiv.classList.toggle('hidden', !isShow);
}

function setDisplayError(isShow: boolean): void {
    errorDiv.classList.toggle('hidden', !isShow);
}