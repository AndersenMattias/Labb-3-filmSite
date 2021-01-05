const moviesList = document.getElementById('movieList');
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {});

const loadMovies = () => {
  try {
    fetch('http://www.omdbapi.com/?s=science&apikey=3be400a5')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  } catch (err) {
    console.log(err);
  }
};
