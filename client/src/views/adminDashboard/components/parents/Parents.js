import React, {useState } from 'react';
import ParentCard from './ParentCard';
import ParentList from './ParentList';


function Parents() {
  const [parentView, setParentView] = useState("parents");
  const [parentId, setParentId] = useState('');

  return (
    <div>
      {parentView === "parents" ?
        <ParentList 
          parentView={parentView} 
          setParentView={setParentView} 
          parentId={parentId}
          setParentId={setParentId}
          /> 
      : parentView  === "parentInfo" ?
          <ParentCard
          parentId={parentId}
          setParentView={setParentView}

          /> 
      : null }
    </div>
  )
}


export default Parents;