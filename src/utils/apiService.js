import axios from 'axios';
import { apiKey, baseURL } from './options';

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

  getMovie = async id => {
    const movie = await axios.get(
      `movie/${id}?api_key=${apiKey}&language=en-US`
    );
    // console.log('movie :>> ', movie.data);
    return await movie.data;
    //   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  };
}
