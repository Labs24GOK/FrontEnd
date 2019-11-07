import React, {useState } from 'react';
import ParentCard from './ParentCard';
import ParentTable from './ParentTable';


function Parents() {
  const [parentView, setParentView] = useState("parentsTable");
  const [parentId, setParentId] = useState('');

  return (
    <div> 
      {parentView === "parentsTable" ?
        <ParentTable
          parentView={parentView} 
          setParentView={setParentView} 
          parentId={parentId}
          setParentId={setParentId}
          /> 
      : parentView  === "parentCard" ?
          <ParentCard
          parentId={parentId}
          setParentView={setParentView}
          parentView={parentView}
          /> 
      : null }
    </div>
  )
}


export default Parents;