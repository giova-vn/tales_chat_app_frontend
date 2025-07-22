function MessageBubble({ message, myMessage }) {
    return(
        <div className={`message ${myMessage ? "message-sended" : "message-received"}`}>
            <p className="message-content">{message.content}</p>
        </div>
    );
}

export default MessageBubble;