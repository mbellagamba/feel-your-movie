import { hashCode } from '../utils';

export function mapSuggestionToQuery({ feeling, word, nostalgic }) {
  let withGenres; let releaseDate; let year;
  switch (feeling) {
    case 'inspired':
      withGenres = '28,9648'; // action, mistery
      break;
    case 'serene':
      withGenres = '35,14'; // comedy fantasy
      break;
    case 'hopeful':
      withGenres = '18,878'; // sci-fi drama
      break;
    case 'engaged':
      withGenres = '18,80'; // drama crime
      break;
    case 'angry':
      withGenres = '10752,12'; // war adventure
      break;
    case 'disengaged':
      withGenres = '27,53'; // horror thriller
      break;
    case 'worried':
      withGenres = '37,10751'; // western family
      break;
    case 'upset':
      withGenres = '35,14,16'; // comedy fantasy animation
      break;
    default:
      withGenres = null;
      break;
  }
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
