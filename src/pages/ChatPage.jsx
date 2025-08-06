import { useState, useEffect } from "react";

import Header from "../components/Header";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

import messageIcon from "../assets/message-icon.png";
import Img from "../assets/user-icon-test.jpg"; 

//mock contacts data for ChatList
const contacts = [
{ id: 'user1', user: "Alice", mess: "Hey there!", prof: Img },
{ id: 'user2', user: "Bob", mess: "Are you free tomorrow?", prof: Img },
{ id: 'user3', user: "Charlie", mess: "Project update!", prof: Img },
];


function ChatPage() {
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

            <div className="mainContent">
                <ChatList
                    selectChat={changeChat}
                    contacts={contacts} 
                    chatSelected={chatSelected}
                />

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
    )
}

export default ChatPage;