import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const SearchFormLabel = (props) => (
  <Aux>
    <label htmlFor={props.name}>{props.name}: {props.value}</label>
    <input
      value={props.value}
      onChange={props.changed}
      type="text"
      className="form-control"
    />
  </Aux>
);

export default SearchFormLabel;