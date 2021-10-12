import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { selectedContact } from '../redux/actions/contactActions'
import { useEffect } from 'react'
const ContactDetails = (props) => {
    // const { name, email } = props.location.state.contact
    const { id } = useParams();
    const dispatch = useDispatch();

    const getSelectedProduct = () => {
        const detailsOfProduct = JSON.parse
            (localStorage.getItem("contacts")).filter((contact) => {
                return contact.id === id
            })

        console.log(detailsOfProduct, 'detailsOfProductdetailsOfProduct')
        dispatch(selectedContact(detailsOfProduct))
    }
    useEffect(() => {
        if (id && id !== "") getSelectedProduct();
    }, [id])

    const contact1 = useSelector((state) => state.contact)

    return (
        <div >
            <div className="contactDetailsDiv">
                <h1>{contact1[0]?.name}</h1>
                <h2>{contact1[0]?.email}</h2>
                <Link to="/"><button>Contact List</button></Link>
            </div>
        </div>
    )
}

export default ContactDetails;