import { Link } from 'react-router-dom'
const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        <div style={{ "display": "flex" }}>
            <div>
                <Link to={{ pathname: "/contact/" + id, state: { contact: props.contact } }}>
                    <h4>{name}</h4>
                    <h5>{email}</h5>
                </Link>
            </div>
            <div>
                <Link to={{ pathname: "/edit/" + id, state: { contact: props.contact } }}><button>Update</button></Link>
                <button onClick={() => { props.contactId(id) }}>Delete</button>
            </div>
        </div>
    )
}

export default ContactCard