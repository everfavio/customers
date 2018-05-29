import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

const HomeContainer = props => {
  return (
    <div>
      <h1>Home</h1>
        <AppFrame
          header='Home'
          body={
            <div>
              Esta es la pantalla inicial
              <CustomersActions>
                <Link to="/customers">Listado de clientes</Link>
              </CustomersActions>
            </div>
          }
        > </AppFrame>
    </div>
  );
};

HomeContainer.propTypes = {
  
};

export default HomeContainer;