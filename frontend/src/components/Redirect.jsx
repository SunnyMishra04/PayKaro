import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Redirect = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  // This component doesn't render anything, as it immediately redirects.
  return null;
};
Redirect.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Redirect;
