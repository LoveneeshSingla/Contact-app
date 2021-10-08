import { Link } from 'react-router-dom'


const ContactDetails = (props) => {
    const { name, email } = props.location.state.contact
    return (
        <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <Link to="/"><button>Contact List</button></Link>
        </div>
    )
}

export default ContactDetails;