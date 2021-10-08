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
        <div>
            <div>
                <h3>Contact List</h3>
                <Link to="/add"><button>Add Contacts</button></Link>
                {retrieveContacts}
            </div>
        </div>
    )
}

export default ContactList;