import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListOfContacts } from './ContactList.styled';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ListOfContacts>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contacts={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ListOfContacts>
  );
};
