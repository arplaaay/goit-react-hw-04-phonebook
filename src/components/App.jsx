import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, Subtitle } from './App.styled';

export default function App() {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState([
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStorageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStorageContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }

    // console.log(parsedContacts);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  //   console.log(contacts);
  // }, [contacts]);

  const checkSameContacts = contact => {
    return contacts.find(
      item => item.name.toLowerCase() === contact.toLowerCase()
    );
  };

  const addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (checkSameContacts(contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => {
      const newState = [contact, ...prevState];

      localStorage.setItem('contacts', JSON.stringify(newState));

      return newState;
    });
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      const newState = prevState.filter(contact => contact.id !== contactId);

      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    });
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    if (e.currentTarget.value) {
      setFilter(e.currentTarget.value);
    } else {
      setFilter('');
    }
  };

  // const filteredContacts = this.handleFilter();

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={addContact} />

      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filteredContacts={handleFilter()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
