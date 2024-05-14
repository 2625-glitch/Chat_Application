import React from 'react';
function ChatInput(props) {
  return (
    <div className="mx-auto ">
      <h2> I am Chat Input Component</h2>
      <input
        onKeyDown={props.send}
        placeholder="Enter a message ..."
        className="p-2 bg-white text-base border border-black rounded-md w-[90%]"
      />
    </div>
  );
}

export default ChatInput;
