import { useState, useEffect, Suspense } from 'react';
import { tmdAPI } from '../../utils/apiService';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
// import { Box } from 'components/Box';
import Card from '../../components/Card';

const movieAPI = new tmdAPI();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetales, setMovieDetales] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '';
  const isMovieDetalesEmpty = !Object.keys(movieDetales).length;

  useEffect(() => {
    async function fetchMovie(id) {
      setMovieDetales(await movieAPI.getMovie(id));
    }
    fetchMovie(movieId);
  }, [movieId]);

  if (isMovieDetalesEmpty) return;

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

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
