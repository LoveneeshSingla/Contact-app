import { Link } from 'react-router-dom'
const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        <div>
            <div style={{ "display": "flex", "justifyContent": "space-between", "width": "100%" }}>
                <div>
                    <Link to={{ pathname: "/contact/" + id, state: { contact: props.contact } }}>
                        <h4 style={{ "margin": "15px 0px" }}>{name}</h4>
                        <h5 style={{ "margin": "0px 0px" }}>{email}</h5>
                    </Link>
                </div>
                <div className="upDelBtn">
                    <Link to={{ pathname: "/edit/" + id, state: { contact: props.contact } }}><button>Update</button></Link>
                    <button className="delBtn" onClick={() => { props.contactId(id) }}>Delete</button>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default ContactCard