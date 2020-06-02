import React from 'react';

function StaffMessageBox({messages}) {
  return (
    <div className="messageBox">
      <h2>Messages</h2>
      {messages.length === 0 ? <></> : <ul>{messages.map((message, id) => <li key={"message" + id}>{message}</li>)}</ul>}
    </div>
  )
}

export default StaffMessageBox;