import React from 'react';
import { TabWrap } from '../mainStyle/styledComponent.js';


function Tab({ tab, navigation, setNavigation, tabColor, setTabColor, selected, setSelected }) {

  const handleClick = (tab) => {
    setSelected(tab.toLowerCase())
    setNavigation(tab.toLowerCase())
  }
  return (
    <a style={{cursor: "pointer"}} onClick={() => handleClick(tab.key)}>
    <TabWrap style={{backgroundColor: `${tab.key.toLowerCase() === selected ? "#DD3B58" : "transparent"}`}}>
      {tab.key}
    </TabWrap>
    </a>
  )
}


export default Tab;