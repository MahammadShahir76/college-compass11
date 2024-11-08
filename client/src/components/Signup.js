import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
const Signup = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [collegename, setcollegename] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('User')
        if (auth) {
            navigate("/")
        }
    }, [navigate])

    const collection = async () => {
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password, collegename }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("User", JSON.stringify(result));
        if (result) {
            navigate("/")
        }
    }

    return (
        <div className='main-signup'>
            <div className='Sign-up'>
                <div className="sign-h1">
                <h1>Signup page</h1>
                </div>
                <input type='text' placeholder='Enter name' onChange={(e) => setname(e.target.value)} value={name} />
                <input type='text' placeholder='Enter email' onChange={(e) => setemail(e.target.value)} value={email} />
                <input type='password' placeholder='Enter password' onChange={(e) => setpassword(e.target.value)} value={password} />
                
                {/* Dropdown for college name */}
                <select onChange={(e) => setcollegename(e.target.value)} value={collegename}>
                    <option value="">Select</option>
                    <option value="Yenepoya institute of technology">Yenepoya institute of technology</option>
                    <option value="Sahyadri College of Engineering">Sahyadri College of Engineering</option>
                    <option value="Indraprastha">Indraprastha</option>
                    <option value="Indradanush instititue">Indradanush instititue</option>
                </select>

                {/* Display selected college name in input box */}
                <input
                    type='text'
                    placeholder='Enter college name'
                    onChange={(e) => setcollegename(e.target.value)}
                    value={collegename}
                    readOnly // Make this input read-only to prevent manual typing
                />

                <button type='button' onClick={collection}>Submit</button>
            </div>
        </div>
    )
}

export default Signup
