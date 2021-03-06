import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({name, editAction, delAction, urlPath}) => {
  return (
    <div>
      <div className="customers-list-items">
        <div className="field">
          <Link to={`${props.urlPath}/${dni}`}>{name}</Link>
        </div>
        <div className="field">
          <Link to={`${props.urlPath}/${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${props.urlPath}/${dni}/del`}>{delAction}</Link>
        </div>
      </div>
    </div>
  );
};

CustomerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;