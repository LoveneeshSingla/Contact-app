import React from 'react';

class AddContacts extends React.Component {

    state = {
        name: "",
        email: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are mandatory")
            return
        }
        this.props.addContact(this.state);
        this.setState({ name: "", email: "" })
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <div className="addYourContactsTitle"><h1>Add your contacts Here</h1><hr className="marginOfHrInTitle" /></div>
                <div className="addContactsDiv">
                    <form onSubmit={this.add}>
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
                            <button className="addbtn">Add</button></div>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddContacts