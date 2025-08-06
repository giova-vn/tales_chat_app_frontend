import { useState } from "react";

function RegisterForm({onSwitch}) {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <div className="formPage">
            <div className="formBox registerForm">
                <h2>Create Account</h2>

                <form className="column" onSubmit={handleSubmit}>
                    <label htmlFor="creaName">Username</label>
                    <input type="text" name="creaName" id="creaName" placeholder="Enter your full name" required />

                    <label htmlFor="creaUsername">Username</label>
                    <input type="text" name="creaUsername" id="creaUsername" placeholder="Enter a username" required />

                    <label htmlFor="">Password</label>
                    <input type="password" name="creaPassword" id="creaPassword" placeholder="Enter a password" required/>
                
                    <button type="submit" className="formBtn">Create New Account</button>
                </form>

                <button onClick={onSwitch} className="switchBtn">Log in an Exisitng Account</button>
            </div>
        </div>
    )
}

export default RegisterForm;