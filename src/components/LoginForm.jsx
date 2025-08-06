import { useState } from "react";

function LoginForm({onSwitch}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
            onLogin()
    }
    

    return (
        <div className="formPage">
            <div className="formBox">
                <h2>Login</h2>

                <form className="column" onSubmit={handleSubmit}>
                    <label htmlFor="logUsername">Username</label>
                    <input type="text" name="logUsername" id="logUsername" placeholder="Enter your username" required />

                    <label htmlFor="logPassword">Password</label>
                    <input type="password" name="logPassword" id="logPassword" placeholder="Enter your password" required/>
                
                    <button type="submit" className="formBtn">Log in</button>
                </form>

                <button onClick={onSwitch} className="switchBtn">Create New Account</button>
            </div>
        </div>
    );
}

export default LoginForm;