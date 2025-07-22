import React, { useState, useEffect } from 'react';
import MessageInput from "./MessageInput";
import MessageBubble from "./MessageBubble";

function ChatWindow({ chat }) {
    const [messages, setMessages] = useState([]);
    const currentUserId = "myUserId"; 

    useEffect(() => {
        if (chat) {
            //mock data for messaegs
            const fetchedMessages = [
                { id: 'm1', senderId: chat.id, content: `Hi ${currentUserId}, this is ${chat.user}!`},
                { id: 'm2', senderId: currentUserId, content: `Hey ${chat.user}! How are you?`},
                { id: 'm3', senderId: chat.id, content: `I'm doing great, thanks! What's up?`},
            ];
            setMessages(fetchedMessages);
        }
    }, [chat]); 

    return (
        <div className="chatWindow">
            <nav>
                <img src={chat.prof} alt={`profile picture of ${chat.user}`} />
                <div className="username-nav">{chat.user}</div>
            </nav>

            <div className="messageBox">
                {messages.map((message) => (
                    <MessageBubble
                        message={message}
                        myMessage={message.senderId === currentUserId}
                    />
                ))}
            </div>

            <MessageInput />
        </div>
    );
}

export default ChatWindow;
