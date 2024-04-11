import { useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import css from '../App/App.module.css';
import ContactList from '../ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  );
  const [filter, setFilter] = useState('');

  const handleContacts = (value) => {
    setContacts([...contacts,value])
  }

  const handleFilter = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

  return (
    <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm onContactsChange={handleContacts} />
    <SearchBox onInputChange={handleFilter}/>
    <ContactList contactList={filteredContacts}/>
    </div>
  )
}

export default App
