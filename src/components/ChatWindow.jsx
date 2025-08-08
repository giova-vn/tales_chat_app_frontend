import React, { useState, useEffect } from 'react';
import MessageInput from "./MessageInput";
import MessageBubble from "./MessageBubble";

import Img from "../assets/user-icon-test.jpg";

function ChatWindow({ chat }) {
    const [messages, setMessages] = useState([]);

    const serverUrl = "http://localhost:5000";
    const currentUserId = "68914e3df002bd4681175ad3"; 

    //getting messages
    useEffect(() => {
        const fetchMessages = async () => {
            if (!chat) {
                setMessages([]);
                console.log("not message to show");
                return;
            }
            else if (!chat.other_user_id) {
                setMessages([]);
                console.log("otjer user not found");
                return;
            }

            try {
                const response = await fetch(`${serverUrl}/message/history?user_id1=${currentUserId}&user_id2=${chat.other_user_id}`);

                if (!response.ok) {
                    throw Error("Backend response has failed");
                }

                const data = await response.json();
                setMessages(data.messages);
            }
            catch(error) {
                console.error("Failed to fetch message for this chat", error);
            }
        }
        fetchMessages();
    }, [chat, serverUrl, currentUserId]);

    //sending messages
    const sendMessage = async (messageContent) => {
        const text = {
            "sender_id": currentUserId,
            "receiver_id": chat.other_user_id,
            "content": messageContent
        };

        try {
            const response = await fetch(`${serverUrl}/message/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(text)
            })

            if(!response.ok) {
                throw Error("Error sending with endpoint", `${response.status}`)
            }

            const newMessage = {
                message_content: messageContent,
                sender: currentUserId,
                message_date: new Date().toISOString()
            };
            
            setMessages(prevMessages => [...prevMessages, newMessage]);
            console.log('Message sent successfully');
        }

        catch (error) {
            console.error("Error sending the message", error);
        }
    };

    return (
        <div className="chatWindow">
            <nav>
                <img src={Img} alt={`profile picture of ${chat.other_username}`} />
                <div className="username-nav">{chat.other_username}</div>
            </nav>

            <div className="messageBox">
                {messages.map((messages) => (
                    <MessageBubble
                        message={messages}
                        myMessage={messages.sender === currentUserId}
                    />
                ))}
            </div>

            <MessageInput 
                onSendMessage={sendMessage}
                senderId={currentUserId}
                receiverId={chat.other_user_id}
            />
        </div>
    );
}

export default ChatWindow;
