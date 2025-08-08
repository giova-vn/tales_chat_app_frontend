import Img from "../assets/user-icon-test.jpg"; 

function ChatList({ selectChat, list, chatSelected }) {
    return (
        <section className="chatList">
            <h2>Chats</h2>

            <div className="contacts-list">
                {list && list.length > 0 ? ( 
                    list.map(contactInfo => {
                        const isActive = chatSelected && chatSelected.id === contactInfo.id;

                        return (
                            <div
                                className={`row contact-block ${isActive ? 'active-chat' : ''}`}
                                onClick={() => {
                                    selectChat(contactInfo);
                                }}>

                                <img src={Img} alt={`profile picture of ${contactInfo.other_username}`}/>

                                <div className="contact-text">
                                    <p className="contact-name">{contactInfo.other_username}</p>
                                    <p>{contactInfo.last_message}</p>
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