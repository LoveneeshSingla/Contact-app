import { Link } from 'react-router-dom'
const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        <div>
            <div style={{ "display": "flex", "justifyContent": "space-between", "width": "100%" }}>
                <div>
                    <Link to={{
                        pathname: "/contact/" + id,
                        state: { contact: props.contact }
                    }}
                        style={{ "textDecoration": "none" }}>
                        <h3 style={{ "margin": "15px 0px", "color": "contactLowerBlue" }}>
                            {name}</h3>
                        <h4 style={{ "margin": "0px 0px", "color": "contactLowerBlue" }}>
                            {email}</h4>
                    </Link>
                </div>
                <div className="upDelBtn">
                    <Link to={{ pathname: "/edit/" + id, state: { contact: props.contact } }}>
                        <button className="updateBtn">Update</button></Link>
                    <button className="delBtn" onClick={() => { props.contactId(id) }}>
                        Delete</button>
                </div>
            </div>
            <hr style={{ "marginRight": "12px" }}></hr>
        </div>
    )
}

export default ContactCard