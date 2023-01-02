// import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { tmdAPI } from '../../utils/apiService';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const movieAPI = new tmdAPI();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetales, setMovieDetales] = useState({});
  const [backLink, setBackLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie(id) {
      setMovieDetales(await movieAPI.getMovie(id));
    }
    fetchMovie(movieId);

    setBackLink(location.state?.from ?? '');
  }, [movieId]);

  //   console.log('movieDetales :>> ', movieDetales);
  const { title, overview, genres } = movieDetales;

  return (
    <>
      <NavLink to={backLink}>Go back</NavLink>
      <h2>{title}</h2>
      <main>
        <h3>Overview</h3>
        <div>{overview}</div>
      </main>
      <NavLink to="cast" state={{ from: location }}>
        cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location }}>
        reviews
      </NavLink>
      <Outlet />
    </>
  );
};

// MovieDetails.propTypes = {}

export default MovieDetails;
