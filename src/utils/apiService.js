import axios from 'axios';
import { apiKey, baseURL, basePosterURL } from './options';

axios.defaults.baseURL = baseURL;

export class tmdAPI {
  constructor() {
    this.trending = [];
    this.movieDetails = '';
    this.movieCredits = '';
    this.movieReviews = '';
    this.genres = [];
  }

  init = async () => {
    await this.getTrending();
  };

  getTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${apiKey}`);
    const trending = await response.data.results;
    return await trending;
  };

  getMovie = async movieId => {
    const movie = await axios.get(
      `movie/${movieId}?api_key=${apiKey}&language=en-US`
    );

    const { genres, id, title, poster_path, vote_average, overview } =
      await movie.data;
    const posterPath = (await poster_path)
      ? `${basePosterURL + poster_path}`
      : 'https://via.placeholder.com/200x300';

    return { genres, id, title, posterPath, vote_average, overview };

    //   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  };

  getActors = async movieId => {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    );
    const cast = await response.data.cast;
    // console.log('cast :>> ', cast);

    const actors = await cast.map(({ id, name, character, profile_path }) => {
      const actorPhotoPath = profile_path
        ? `${basePosterURL + profile_path}`
        : 'https://via.placeholder.com/200x300';

      return { id, name, character, actorPhotoPath };
    });

    //   https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

    return await actors;
  };

  getReviews = async movieId => {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
    );

    // console.log('response :>> ');

    return await response.data.results;
  };

  searchMovie = async query => {
    // query = query.trim().toLowerCase();

    // console.log('searchMovie query :>> ', query);

    const response = await axios.get(
      `search/movie/?api_key=${apiKey}&language=en-US&query=${query}`
    );

    // console.log('response :>> ', response);

    return await response.data.results;
  };
}
