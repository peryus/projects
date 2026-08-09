const apiUrl = "/movies";

let currentPage = 1;
let perPage = 10;
let totalPages = 1;
let totalCount = 0;

const moviesDiv = document.getElementById("movies");
const pageInfo = document.getElementById("pageInfo");
const rangeInfo = document.getElementById("rangeInfo");
const perPageInput = document.getElementById("perPageInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

async function loadMovies() {
  try {
    const response = await fetch(
        `${apiUrl}?page=${currentPage}&perPage=${perPage}`
    );

    const result = await response.json();

    totalCount = result.totalCount;
    totalPages = Math.ceil(totalCount / perPage);

    const start = (currentPage - 1) * perPage + 1;
    const end = Math.min(currentPage * perPage, totalCount);

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    rangeInfo.textContent = `Documents ${start}–${end} of ${totalCount}`;

    showMovies(result.data);
    updateButtons();
  } catch (error) {
    moviesDiv.textContent = "Failed to load data";
  }
}

function showMovies(movies) {
  moviesDiv.innerHTML = "";

  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");

    movieDiv.className = "movie";
    movieDiv.textContent = JSON.stringify(movie, null, 2);

    moviesDiv.appendChild(movieDiv);
  });
}

function updateButtons() {
  prevBtn.disabled = currentPage <= 1;
  nextBtn.disabled = currentPage >= totalPages;
}

perPageInput.addEventListener("change", () => {
  perPage = parseInt(perPageInput.value) || 10;
  currentPage = 1;

  loadMovies();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadMovies();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadMovies();
  }
});

loadMovies();