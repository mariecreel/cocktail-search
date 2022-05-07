import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @param {object} props
 * @return {JSX}
 */
const SearchForm = ({
  className,
  placeHolder,
  label,
  id,
  setResults,
  setError,
}) => {
  const [query, setQuery] = useState('');
  const searchOnSubmit = (e) => {
    e.preventDefault();
    const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    fetch(`${baseURL}${query}`)
        .then((res) => res.json())
        .then(
            (data) => {
              setResults(data);
            },
            (error) => {
              setError(error);
            },
        );
  };
  return (
    <form onSubmit={searchOnSubmit} role='search' className={className}>
      <label htmlFor={id}>{label}</label>
      <div id='search-input-wrapper'>
        <input
          type='search'
          id={id}
          name={id}
          placeholder={typeof placeHolder === 'undefined' ? null : placeHolder}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  setResults: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export const StyledSearchForm = styled(SearchForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  & > #search-input-wrapper {
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    & input {
        width: 75%;
        border-radius: 20px 0px 0px;
        color: #343470;
        border: 2px solid;
        padding: 5px;
    }
    & button {
        width: 25%;
        color: #a13c3e;
        border-radius: 0px 20px 20px 0px;
        border: 2px solid;
        background: #f3dddd;
        font-size: 1.25em;
    }
  }
`;
