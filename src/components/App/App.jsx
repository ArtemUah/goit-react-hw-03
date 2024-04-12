import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import css from '../App/App.module.css';
import ContactList from '../ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(()=>{
    const storage = localStorage.getItem('savedContacts');
    return JSON.parse(storage);
  }
  );

  const [filterContact, setFilterContact] = useState('');

  useEffect(()=>{
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  },[contacts]);


    const handleContacts = (value) => {
    setContacts([...contacts, value]);
  }

  const handleFilter = (value) => {
    setFilterContact(value);
  };
  const handleDeleteContact = (id) =>{
    setContacts(()=>{
      return contacts.filter(contact => contact.id !== id);
    })
  }
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterContact.toLowerCase().trim()));

  return (
    <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm onContactsChange={handleContacts} />
    <SearchBox onInputChange={handleFilter}/>
    {contacts.length > 0 && <ContactList contactList={filteredContacts} onDeleteContact={handleDeleteContact}/>
}
    </div>
  )
}

export default App
