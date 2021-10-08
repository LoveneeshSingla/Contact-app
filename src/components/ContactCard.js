
const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        <div style={{ "display": "flex" }}>
            <div>
                <h4>{name}</h4>
                <h5>{email}</h5>
            </div>
            <div>
                <button onClick={() => { props.contactId(id) }}>Delete</button>
            </div>
        </div>
    )
}

export default ContactCard