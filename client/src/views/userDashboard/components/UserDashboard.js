import React, { useState } from 'react';
import MessageBox from "./MessageBox";

function UserDashboard({messages}) {

    const [userData, setUserData] = useState({
        name: "Mohammed",
        messages: ["Make a payment so that [student] can continue enrolling for [course].",
        "The latest progress report for [student]’s [course] is now available. View report.",
        "Great news! [student] has been moved off the waitlist and is now enrolled in [course]."],
        
    })

    return (
        <div className="content">
            <MessageBox messages={userData.messages} />
        </div>
    )
}

export default UserDashboard;