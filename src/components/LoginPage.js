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
            <form onSubmit={Match}>
                <input className="inputsstyle" type="text" placeholder="Enter your Name"
                    value={loginData.name}
                    onChange={(e) => setName(e, 'name')} /><br />
                <input className="inputsstyle" type="text" placeholder="Enter your Email"
                    value={loginData.email}
                    onChange={(e) => setName(e, 'email')} /><br />
                <button style={{ "padding": "5px 10px" }}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;