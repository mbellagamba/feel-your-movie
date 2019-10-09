const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '570e8eed172c994070c1c8b073a3d94f';
const LANGUAGE = 'en-US';

export const discoverMovies = (genre, page) => {
  const genreParam = genre && `&with_genres=${genre}`;
  return `${API_URL}/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}${genreParam}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
};

export const fetchGenres = () => `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`;

export default API_URL;
