import { NavLink, Outlet, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types'

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" state={{ from: location }}>
            Home
          </NavLink>
          <NavLink to="movies">Movie</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

// Layout.propTypes = {}

export default Layout;
