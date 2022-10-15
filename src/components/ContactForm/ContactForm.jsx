import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, AddContactBtn } from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    setState(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setState({ name: '', number: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact(state);
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name ?? ''}
          onChange={handleChange}
        />
      </Label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number ?? ''}
          onChange={handleChange}
        />
      </label>

      <AddContactBtn>Add contact</AddContactBtn>
    </Form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
