import React, { useState } from 'react';
import StaffTable from './StaffTable';
import StaffCard from './staffCard/StaffCard';

const Staff = (props) => {
  const [staffView, setStaffView] = useState("staffTableView");
  const [staffID, setStaffID] = useState('')
  
  return (
    <>
        {staffView === "staffTableView" ? < StaffTable 
                staffView={staffView}
                setStaffView={setStaffView} 
                staffID={staffID}
                setStaffID={setStaffID}
                /> 
        :staffView === "staffCardView" ? <StaffCard 
              setStaffView={setStaffView} 
              staffID={staffID}
              
                 /> : null}
    </>
  )
};

export default Staff;