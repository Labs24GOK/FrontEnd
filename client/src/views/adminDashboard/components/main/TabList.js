import React, { useState, useEffect } from 'react';
import Tab from './Tab';
import { Link } from 'react-router-dom';
import {TabsWrapColumn} from '../mainStyle/styledComponent.js';



function TabList({tabs, navigation, setNavigation, tabColor, setTabColor}) {
  const [selected, setSelected] = useState(navigation);
  useEffect(() => {

  }, [selected])

  return (
      <TabsWrapColumn>
        {tabs.map((tab, index) => {
          return <Link to='/dashboard' key={index} style={{textDecoration: 'none', color: 'black'}} ><Tab tab={tab}  selected={selected} setSelected={setSelected} tabColor={tabColor} navigation={navigation} setTabColor={setTabColor} setNavigation={setNavigation} /></Link>
        })}
      </TabsWrapColumn>
  )
}


export default TabList;