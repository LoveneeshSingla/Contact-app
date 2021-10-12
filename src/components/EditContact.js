import React from 'react';

class EditContacts extends React.Component {

    constructor(props) {
        super(props);
        const { id, name, email } = props.location.state.contact
        this.state = {
            id,
            name,
            email,
        }
    }
    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Please fill all Fields")
            return
        }
        this.props.updateContact(this.state);
        this.setState({ name: "", email: "" })
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <div className="addYourContactsTitle"><h1>Update your contacts Here</h1>
                    <hr className="marginOfHrInTitle" /></div>
                <div className="addContactsDiv">
                    <form onSubmit={this.update}>
                        <strong><label>Enter your Name: -</label></strong><br />
                        <input type="text" className="inputsstyle"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        /><br />
                        <strong><label>Enter your Email: -</label></strong><br />
                        <input type="text" className="inputsstyle"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} /><br />
                        <div className="buttonClass">
                            <button className="addbtn">update</button></div>
                    </form>
                </div>
            </div>
        )
    }
}
export default EditContacts