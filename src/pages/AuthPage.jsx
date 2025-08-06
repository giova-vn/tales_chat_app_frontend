import { useState } from "react";

import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

function AuthPage() {
    const [showLoginForm, setShowLogin] = useState(true);

    const switchToRegister = () => setShowLogin(false);
    const switchToLogin = () => setShowLogin(true);

    return(
        <div>
            {showLoginForm ? (
                <LoginForm onSwitch={switchToRegister}/>
                ) : (
                <RegisterForm onSwitch={switchToLogin}/>
                )}
        </div>
    );
}

export default AuthPage;