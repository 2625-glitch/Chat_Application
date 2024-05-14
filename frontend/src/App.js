import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ChatInput from './components/ChatInput/ChatInput';
import { connect, sendMsg } from './api/index.js';
import ChatHistory from './components/ChatHistory/ChatHistory';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log('New Messages from user');
      setChatHistory((prevHistory) => [...prevHistory, msg]);
    });
  }, []);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className="text-center m-0 p-0">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default App;
