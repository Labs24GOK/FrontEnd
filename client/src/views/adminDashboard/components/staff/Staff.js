import React, { useState } from 'react';
import StaffCard from './StaffCard';
import StaffTable from './StaffTable';


const Staff = () => {
  const [staffView, setStaffView] = useState("staff");
  const [staffId, setStaffId] = useState('');

  return (
    <div>
      {staffView === "staff" ?
        <StaffTable
          staffView={staffView} 
          setStaffView={setStaffView} 
          staffId={staffId}
          setStaffId={setStaffId}
          /> 
      : staffView  === "staffInfo" ?
          <StaffCard
          staffId={staffId}
          setStaffView={setStaffView}
          /> 
      : null }
    </div>
  )
}

             
export default Staff;