import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/**
 * @param {object} props
 * @return {JSX}
 */
const Header = ({className, text}) => {
  return (
    <h1 className={className}>
      {text}
    </h1>
  );
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export const StyledHeader = styled(Header)`
    font-family: 'Playfair Display', serif;
`;
