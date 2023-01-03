// import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { tmdAPI } from '../../utils/apiService';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
// import { Box } from 'components/Box';
import Card from '../../components/Card';

const movieAPI = new tmdAPI();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetales, setMovieDetales] = useState({});
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie(id) {
      setMovieDetales(await movieAPI.getMovie(id));
    }
    fetchMovie(movieId);
  }, [movieId]);
  const backLink = location.state?.from ?? '';

  // console.log('movieDetales :>> ', movieDetales);
  // const { genres, id, title, posterPath, vote_average, overview } =

  return (
    <main>
      <NavLink to={backLink}>Go back</NavLink>
      <Card movieDetales={movieDetales} />

      <NavLink to="cast" state={{ from: backLink }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: backLink }}>
        Reviews
      </NavLink>
      <Outlet />
    </main>
  );
};

// MovieDetails.propTypes = {}

export default MovieDetails;
