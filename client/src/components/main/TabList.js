import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { Link } from 'react-router-dom';

const TabsWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-top: 25px;
`

function TabList({tabs, navigation, setNavigation, tabColor, setTabColor}) {
  const [selected, setSelected] = useState(navigation);
  useEffect(() => {

  }, [selected])

  return (
      <TabsWrap>
        {tabs.map((tab, index) => {
          return <Link to='/' key={index} style={{textDecoration: 'none', color: 'black'}} ><Tab tab={tab}  selected={selected} setSelected={setSelected} tabColor={tabColor} navigation={navigation} setTabColor={setTabColor} setNavigation={setNavigation} /></Link>
        })}
      </TabsWrap>
  )
}


export default TabList;