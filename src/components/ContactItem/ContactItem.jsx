import React from 'react';
import PropTypes from 'prop-types';
import { ItemOfContact } from './ContactItem.styled';

export const ContactItem = ({
  contacts: { id, name, number },
  deleteContact,
}) => {
  return (
    <ItemOfContact>
      {name}: {number}
      <button onClick={() => deleteContact(id)}>Delete</button>
    </ItemOfContact>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
