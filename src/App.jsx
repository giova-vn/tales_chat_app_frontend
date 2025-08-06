import React, { useState } from "react";

import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";

function App() {
  //login page loading
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => setIsLoggedIn(true);

  return (
    <div>
      {isLoggedIn ? <ChatPage /> : <AuthPage onLogin={handleLogin}/>}
    </div>
  );
}

export default App;