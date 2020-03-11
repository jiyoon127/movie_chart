import axios from 'axios';

export async function getMovieInfo(id) {
  const {
    data: {
      data: { movie },
    },
  } = await axios.get(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
  );
  console.log(movie);

  return movie;
}
