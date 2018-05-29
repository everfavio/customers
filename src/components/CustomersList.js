import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({customers}) => {
  return (
    <div>
      {
        customers.map( c =>
          <CustomerListItem
          key={c.dni}
          name={c.name}
          editAction={'Editar'}
          delAction={'Eliminar'}
          urlPath={urlPath}>            
          </CustomerListItem>
        )
      }
    </div>
  );
};

CustomersList.propTypes = {
  customer: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersList;