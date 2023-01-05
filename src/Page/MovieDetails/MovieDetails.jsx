import { useState, useEffect, Suspense } from 'react';
import { tmdAPI } from '../../utils/apiService';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import Card from '../../components/Card';

import { Container } from '../../components/Common/Common.styled';
import { BackLinkStyled, AdditionalLinkStyled } from './MovieDetails.styled';

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
      <Container>
        <BackLinkStyled to={backLink}>Go back</BackLinkStyled>
      </Container>

      <Card movieDetales={movieDetales} />

      <Box as="section" pb={4}>
        <Container>
          <h3>Additional info</h3>
          <Box as="ul" display="flex" gridGap={3}>
            <Box as="li">
              <AdditionalLinkStyled to="cast" state={{ from: backLink }}>
                Cast
              </AdditionalLinkStyled>
            </Box>
            <Box as="li">
              <AdditionalLinkStyled to="reviews" state={{ from: backLink }}>
                Reviews
              </AdditionalLinkStyled>
            </Box>
          </Box>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </main>
  );
};

export default MovieDetails;
