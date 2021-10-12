import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ContactCard from "./ContactCard";



const ContactList = (props) => {

    const contacts = useSelector((state) => state.allContacts.contacts)
    const deleteContactId = (id) => {
        props.getContactId(id);
    }

    const editContactId = (id) => {
        props.editContactId1(id);

    }

    // props.contacts
    //  will also work here in map function because we all passing props from parents element also
    const retrieveContacts = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} contactId={deleteContactId}
                editContact1={editContactId} key={contact.id} />
        )
    })


    return (
        <div style={{ "width": "100%", "padding": "25px 5px 0 5px" }} className="background">
            <div className="contactListNavBarTitle">
                <h3 style={{ "color": "indigo" }}>Contact List</h3>
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