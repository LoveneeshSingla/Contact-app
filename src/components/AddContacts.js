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
                <form onSubmit={this.add}>
                    <input type="text" className="inputsstyle" placeholder="Enter your name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    /><br />
                    <input type="text" className="inputsstyle" placeholder="Enter your email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <button className="addbtn">Add</button>
                </form>
            </div>
        )
    }
}
export default AddContacts