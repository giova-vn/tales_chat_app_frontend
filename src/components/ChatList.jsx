function ChatList({ selectChat, contacts, chatSelected }) {
    return (
        <section className="chatList">
            <h2>Chats</h2>

            <div className="contacts-list">
                {contacts && contacts.length > 0 ? ( 
                    contacts.map(contactInfo => {
                        const isActive = chatSelected && chatSelected.id === contactInfo.id;

                        return (
                            <div
                                className={`row contact-block ${isActive ? 'active-chat' : ''}`}
                                onClick={() => {
                                    selectChat(contactInfo);
                                }}>

                                <img src={contactInfo.prof} alt={`profile picture of ${contactInfo.user}`}/>

                                <div className="contact-text">
                                    <p className="contact-name">{contactInfo.user}</p>
                                    <p>{contactInfo.mess}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p id="no-chats-text">No chats available.</p>
                )}
            </div>
        </section>
    );
}

export default ChatList;