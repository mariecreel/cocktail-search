import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Results = ({results}) => {
  return (
    <div id='results' role='region' aria-label='Search results'>
      {results ? (
        <ul>
          {results.drinks &&
            results.drinks.map((drink) => (
              <StyledResult result={drink} key={drink.idDrink} />
            ))}
        </ul>
      ) : null}
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.object,
};

const Result = ({className, result, key}) => {
  return (
    <li className={className}>
      <h2>{result.strDrink}</h2>
      <ul key={result.idDrink + 'data'} id='result-data'>
        {result.strInstructions && (
          <li key={`${key}-ingredients`}>
            <h3>Ingredients</h3>
            <ul>
              {/* ingredients and their measurements are separate
            in the returned object, but they have the same index,
            so grab the index from the key for the ingredient and
            use that number to get the value for the measurement.
            neither measurement nor ingredient are guaranteed to be null,
            so check for truthiness before inserting elements into dom.
            */}
              {Object.keys(result).map(
                  (key) =>
                    key.match(/ingredient/i) &&
                  result[key] && (
                      <li key={`${key}-ingredient-${key}`}>
                        {result[key]}{' '}
                        {result[`strMeasure${key.match(/[0-9]+/)[0]}`] && (
                          <em>
                            {result[`strMeasure${key.match(/[0-9]+/)[0]}`]}
                          </em>
                        )}
                      </li>
                    ),
              )}
            </ul>
          </li>
        )}
        {result.strInstructions && (
          <li key={`${key}-instructions`}>
            <h3>Instructions</h3>
            {result.strInstructions}
          </li>
        )}
      </ul>
    </li>
  );
};

Result.propTypes = {
  className: PropTypes.string,
  key: PropTypes.string,
  result: PropTypes.object,
};

const StyledResult = styled(Result)`
  text-align: left;
  list-style: none;
  background: #dfdff1;
  color: #343470;
  border: 2px solid;
  border-radius: 0px 20px 20px;
  padding: 10px;
  margin: 10px 0px;
  & #result-data {
    list-style: none;
    & ul {
      list-style: circle;
      margin-left: 15px;
    }
    & h3 {
      margin-bottom: 5px;
      text-decoration: underline;
    }
  }
`;
