import React from 'react';
import Message from '../Message/Message';
function ChatHistory(props) {
  const messages = props.chatHistory.map((msg) => (
    <Message key={msg.timeStamp} message={msg.data} />
  ));
  console.log(messages);
  return (
    <div className="bg-gray-500 p-10 ">
      <h2 className="text-white">Chat History</h2>
      {messages}
    </div>
  );
}

export default ChatHistory;
