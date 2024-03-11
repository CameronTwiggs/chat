import "./index.css"

const ConversationContainer = (props) => {
    const renderMessage = (message) => {
        if (message.sender === 'user') {
            return <div className="user-message">{message.message}</div>;
        } else if (message.sender === 'backend') {
            return <div className="backend-message">{message.message}</div>;
        }
    };
    
    return (
        <div className="chatbox">
            {props.messageList.map((message, index) => (
                <div key={index}>{renderMessage(message)}</div>
            ))}
            {props.isTyping ? <div>Typing...</div> : null}
        </div>
    );
}

export default ConversationContainer;