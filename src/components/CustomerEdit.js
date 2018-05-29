import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = props => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <h3>Nombre: {name} / dni: {dni} / edad: {age}</h3>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age:PropTypes.string,  
};

export default CustomerEdit;