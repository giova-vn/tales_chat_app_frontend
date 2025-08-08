import { useState, useEffect } from "react";

import Header from "../components/Header";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

import messageIcon from "../assets/message-icon.png";


function ChatPage() {
    //API
    const [serverUrl] = useState("http://localhost:5000");
    const [chats, setChats] = useState([]);

    //test with user1
    const currentUserId = "68914e3df002bd4681175ad3";

    //call for ChatList information
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${serverUrl}/chats?user_id=${currentUserId}`);

                if (!response.ok) {
                    throw Error("Backend response has failed");
                }

                const data = await response.json();
                setChats(data);
            }
            catch (error) {
                console.error("Failed to fetch list chat data", error);
            }
        };
        fetchData();
    }, [serverUrl, currentUserId]);

    //selecting chat
    const [chatSelected, setChatSelected] = useState(null); 
    const changeChat = (thisChat) => {
        setChatSelected(thisChat);
    };

    //listening for keyboard event
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setChatSelected(null);
            } 
        };
        window.addEventListener("keydown", handleEscape);
        
        return () => {
        window.removeEventListener("keydown", handleEscape);
        };

    }, []); 
    

    return (
        <div>
            <Header />

            {/* left chat list  */}
            <div className="mainContent">
                <ChatList
                    selectChat={changeChat}
                    list={chats} 
                    chatSelected={chatSelected}
                />

                {/* open a chat  */}
                {chatSelected ? ( 
                <ChatWindow chat={chatSelected} />
                ) : (
                <div className="central-image-section">
                    <img
                        src={messageIcon}
                        alt="bubble message icon - not chat open"
                        id="central-image"
                    />
                    <p>Start a new chat</p>
                </div>
                )}
            </div>
        </div>
    );
}

export default ChatPage;