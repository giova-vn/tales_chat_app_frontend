import { useState } from "react";

function MessageInput({ onSendMessage, senderId, receiverId }) {
    const [messageContent, setMessageContent] = useState("");

    const handleButtonClick = () => {
        if (messageContent.trim()) {
            onSendMessage(messageContent);
            setMessageContent("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleButtonClick();
        }
    };

    return (
        <div className="row input-bar">
            <textarea
                className="messageInput"
                placeholder="Write a message"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)} 
                onKeyDown={handleKeyPress}
            >
            </textarea>

            <button className="send-btn" onClick={handleButtonClick}>
                &#11166;
            </button>
        </div>
    )
}

export default MessageInput;