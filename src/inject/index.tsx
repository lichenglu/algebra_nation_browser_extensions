import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ChatbotIcon from 'assets/chatbot.svg'
import { ChromeEvents } from 'types'
import "./index.scss";

const Main: React.FC = (props) => {
    useEffect(() => {
        const userNames = document.getElementsByClassName('user-name')
        const userName = userNames[0]
        if (userName) {
            chrome.runtime.sendMessage({ type: ChromeEvents.RECEIVE_USER_NAME, payload: userName?.textContent?.trim() });
        }
    }, [])

    return (
        <div className={'my-extension'}>
            <img src={chrome.runtime.getURL(ChatbotIcon)} alt="chatbot_icon"/>
        </div>
    )
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);