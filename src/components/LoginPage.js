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
            <div className="addYourContactsTitle"><h1>Please Enter Your Details</h1><hr className="marginOfHrInTitle" /></div>
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
                    <div className="buttonClass">
                        <button className="addbtn">Login</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default LoginPage;