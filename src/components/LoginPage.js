import { useState } from 'react'
const LoginPage = (props) => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    const [loginData, setLoginData] = useState({ name: '', email: '' })
    const Match = (e) => {
        e.preventDefault();
        if (loginData.name === "" || loginData.email === "") {
            alert("please enter all fields")
            return
        }
        props.getlogindata(loginData)

    }

    const setName = (e, key) => {
        let data = { ...loginData }
        data[key] = e.target.value;
        setLoginData(data)
    }

    return (
        <div>
            <div style={{ "text-align": "center" }}><h1>Please Enter Your Details</h1><hr /></div>
            < div className="addContactsDiv">
                <form onSubmit={Match}>
                    <strong><label>Enter your Name: -</label></strong><br />
                    <input className="inputsstyle" type="text"
                        value={loginData.name}
                        onChange={(e) => setName(e, 'name')} /><br />
                    <strong><label>Enter your Email: -</label></strong><br />
                    <input className="inputsstyle" type="text"
                        value={loginData.email}
                        onChange={(e) => setName(e, 'email')} /><br />
                    <div style={{ "width": "30%", "margin": "0px 40%" }}>
                        <button style={{ "padding": "5px 30px" }}>Login</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default LoginPage;