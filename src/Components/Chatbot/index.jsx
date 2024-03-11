import { useState, useEffect } from 'react';
import { axiosInstance } from '../../Utilities/axios';
import generateMessage from '../../Utilities/generateMessage';
import { ConversationContainer, MessageInput } from "../../Components";

const Chatbot = (props) => {
    const [messageList , setMessageList] = useState([generateMessage(1, null, 'backend', 'Hello! I am a chatbot. How can I help you?')]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        console.log(messageList);
    }, [messageList])

    const handleSendMessage = (e) => {
        e.preventDefault();
        setIsTyping(true);
        const userMessage = generateMessage(messageList.length + 1, null, 'user', currentMessage)
        setMessageList([...messageList, userMessage]);
        setCurrentMessage('');

        axiosInstance.post('/chatbot', userMessage)
            .then((res) => {
                // Update messageList with both user message and server response
                setMessageList(prevMessages => [
                    ...prevMessages,
                    generateMessage(prevMessages.length + 1, null, 'backend', res.data.message)
                ]);

                setIsTyping(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleMessageChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setCurrentMessage(e.target.value); 
    };

    return (
        <div>
            <ConversationContainer messageList={messageList} isTyping={isTyping}/>
            <MessageInput sentMessageHandler={handleSendMessage} changeMessageHandler={handleMessageChange} currentMessage={currentMessage}/>
        </div>
    );
}

export default Chatbot;
