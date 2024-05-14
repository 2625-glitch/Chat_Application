import React, { useState, useEffect } from 'react';

const Message = (props) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const temp = JSON.parse(props.message);
    setMessage(temp);
  }, [props.message]);

  return (
    <div
      className={`Message ${
        message && message.sender === 'me' ? 'text-purple-500 float-right' : ''
      } block bg-gray-200 m-2 mx-auto p-2 md:p-3 rounded-lg shadow-lg clear-both`}
    >
      {message && message.body}
    </div>
  );
};

export default Message;
