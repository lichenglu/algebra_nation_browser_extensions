import React, { useEffect, useState } from 'react';
import produce from 'immer';
import logo from 'assets/logo.svg';
import { ChromeMessage, ChromeEvents, BackgroundState } from 'types'
import './index.css';

function App() {
  const [state, setState] = useState<BackgroundState>({});

  useEffect(() => {
    chrome.storage.sync.get('appState', (data) => {
      if (data.appState) {
        setState(data.appState)
      }
    })

    chrome.runtime.onMessage.addListener((message: ChromeMessage) => {
      switch(message.type) {
        case ChromeEvents.RECEIVE_USER_NAME:
          return setState(produce((draft: BackgroundState) => {
            draft.userName = message.payload
          }))
        default:
          break
      }
    });
  }, [])

  useEffect(() => {
    if (Object.keys(state).length > 0) {
      chrome.storage.sync.set({
        appState: state
      })
    }
  }, [state])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {state.userName}
        </p>
      </header>
    </div>
  );
}

export default App;
