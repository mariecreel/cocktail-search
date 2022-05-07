import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {StyledHeader} from './components/Header';
import {StyledSearchForm} from './components/Input';
import {Results} from './components/SearchResults';
// must pass class name and attach to html
// for styled component styles to apply
// see https://styled-components.com/docs/basics#styling-any-component
/**
 * @param {object} props
 * @return {JSX}
 */
const App = ({className}) => {
  const [results, setResults] = useState({});
  const [error, setError] = useState('');
  return (
    <div className={className}>
      <StyledHeader text={'🍸Cocktail Search'} />
      <StyledSearchForm
        placeHolder={'e.g., margarita'}
        id={'cocktail-search'}
        label={'Search for drinks'}
        setResults={setResults}
        setError={setError}
      />
      {error ? <div>{error}</div> : <Results results={results}/>}
    </div>
  );
};

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export const StyledApp = styled(App)`
  text-align: center;
  padding: 10px;
  background: white;
  min-height: 100%;
  background: #CFD2AD;
  color: #343470;
`;
