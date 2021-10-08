import React from 'react';

class EditContacts extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    state = {
        name: "",
        email: ""
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert("All fields are mandatory")
            return
        }
        this.props.addContact(this.state);
        this.setState({ name: "", email: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.update}>
                    <input type="text" className="inputsstyle" placeholder="Enter your name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    /><br />
                    <input type="text" className="inputsstyle" placeholder="Enter your email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <button className="addbtn">update</button>
                </form>
            </div>
        )
    }
}
export default EditContacts