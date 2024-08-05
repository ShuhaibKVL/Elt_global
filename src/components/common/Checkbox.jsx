import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input 
        type="checkbox" 
        className="form-checkbox text-blue-600" 
        checked={checked} 
        onChange={onChange} 
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
