import { hashCode } from '../utils';

const genres = {
  inspired: '28,9648', // action, mistery
  serene: '35,14', // comedy fantasy
  hopeful: '18,878', // sci-fi drama
  engaged: '18,80', // drama crime
  angry: '10752,12', // war adventure
  disengaged: '27,53', // horror thriller
  worried: '37,10751', // western family
  upset: '35,14,16', // comedy fantasy animation
};

export function mapSuggestionToQuery({ feeling, word, nostalgic }) {
  const withGenres = genres[feeling];
  let releaseDate;
  let year;
  if (nostalgic) {
    releaseDate = 'release_date.lte=2000-01-01';
    // year between 1970 and 1999
    year = 1999 - Math.abs(hashCode(word) % 29);
  } else {
    releaseDate = 'release_date.gte=2000-01-01';
    const currentYear = new Date().getFullYear();
    // year between now and 2000
    year = currentYear - Math.abs(hashCode(word) % (currentYear - 2000));
  }
  const query = { with_genres: withGenres, release_date: releaseDate, year };
  return Object.keys(query)
    .map((key) => `${key}=${encodeURI(query[key])}`)
    .join('&');
}

export default mapSuggestionToQuery;
