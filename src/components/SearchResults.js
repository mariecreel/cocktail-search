import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Results = ({ className, results }) => {
  return (
    <div id='results' role='region' aria-label='Search results'>
      {results ? (
        <ul>
          {results.drinks &&
            results.drinks.map((drink) => <StyledResult result={drink} key={drink.idDrink}/>)}
        </ul>
      ) : null}
    </div>
  );
};

const Result = ({ className, result, key }) => {
  return (
    <li className={className}>
      <h2>{result.strDrink}</h2>
      <ul key={result.idDrink + 'data'} id='result-data'>
        {result.strInstructions && (
          <li key='instructions'>
            <h3>Instructions</h3>
            {result.strInstructions}
          </li>
        )}
      </ul>
    </li>
  );
};

const StyledResult = styled(Result)`
  text-align: left;
  list-style: none;
  background: #dfdff1;
  color: #343470;
  border: 2px solid;
  border-radius: 0px 20px 20px;
  margin: 10px 2px;
  padding: 10px;
  & #result-data {
    margin-left: 20px;
    list-style: none;
  }
`;
