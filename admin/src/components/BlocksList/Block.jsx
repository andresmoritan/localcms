import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import { NavLink } from 'react-router-dom';

const Block = ({ id }) => {
  const name = startCase(id);

  return (
    <li className="border-b-2">
      <NavLink
        className="block p-5 w-full text-left hover:bg-blue-200"
        activeClassName="bg-blue-200"
        to={`/block/${id}`}
      >
        {name}
      </NavLink>
    </li>
  );
};

Block.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Block;