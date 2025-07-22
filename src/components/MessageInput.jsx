function MessageInput() {
    return (
        <div className="row input-bar">
            <textarea 
                className="messageInput" placeholder="Write a message">
            </textarea>
            
            <div className="send-btn">&#11166;</div>
        </div>
    )
}

export default MessageInput;