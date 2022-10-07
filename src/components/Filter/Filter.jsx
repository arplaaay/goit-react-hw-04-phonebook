import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
