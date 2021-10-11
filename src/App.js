import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header'
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import ContactDetails from './components/ContactDetails'
import EditContact from './components/EditContact'
import LoginPage from './components/LoginPage'
import WelcomePage from './components/WelcomePage'
// import store from './redux/store'

function App() {

  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts"

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const updateContactHandler = (contact1) => {
    setContacts(contacts.map((contact) => {
      return contact.id === contact1.id ? { ...contact1 } : contact
    }))
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList);
  }

  const loginHandler = (loginData) => {
    const checkData = contacts.filter((contact) => {
      return (contact.name === loginData.name && contact.email === loginData.email)
    })
    if (checkData.length === 1) {
      alert("matched")
    }
    else {
      alert("not Matched")
    }
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts)
      setContacts(retrieveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/add" render={props => <AddContacts {...props} addContact={addContactHandler} />} />
          <Route path="/" exact render={props => <ContactList {...props} contacts={contacts}
            getContactId={removeContactHandler} />} />
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/edit/:id" render={props => <EditContact {...props} updateContact={updateContactHandler} />} />
          <Route path="/login" render={props => <LoginPage {...props} getlogindata={loginHandler} />} />
          <Route path="/welcome" render={props => { <WelcomePage {...props} /> }} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;




