import { Link } from 'react-router-dom'

import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactId = (id) => {
        props.getContactId(id);
    }

    const editContactId = (id) => {
        props.editContactId1(id);

    }

    const retrieveContacts = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} contactId={deleteContactId}
                editContact1={editContactId} key={contact.id} />
        )
    })


    return (
        <div style={{ "width": "100%", "padding": "8px 5px 0 5px", "backgroundColor": "White" }}>
            <div className="contactListNavBarTitle">
                <h3>Contact List</h3>
            </div>
            <div className="contactListNavBarMenu">
                <Link to="/login"><button className="loginBtn">Login</button></Link>
                <Link to="/add"><button className="addContactsBtn">Add Contacts</button></Link>
            </div>

            <div>{retrieveContacts}</div>
        </div>
    )
}

export default ContactList;