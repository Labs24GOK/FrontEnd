import React, { useState } from 'react';
import styled from 'styled-components';
import { adminDashboardTabs } from '../../../../data';
import TabList from './TabList';
import Display from './Display';

const DashboardWrap = styled.div`
  display: flex;
  padding: 0 0 0 0;
  
`

const TabsWrap = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 100px;
  // overflow-x: hidden;
  background: #269FB0;
`
const DisplayWrap = styled.div`
  width: 80%;
  height: 100vh;
  position: relative;
  top:100px;
  left: 200px;
  // overflow-x: hidden;
`

function Dashboard() {
const [navigation, setNavigation] = useState("main");
const [tabColor, setTabColor] = useState("transparent");


  return (
    <DashboardWrap>
      <TabsWrap>
        <TabList tabs={adminDashboardTabs} navigation={navigation} setNavigation={setNavigation} tabColor={tabColor} setTabColor={setTabColor} />
      </TabsWrap>

      <DisplayWrap>
          <div>
              <Display  navigation={navigation}/>
          </div>
      </DisplayWrap>

    </DashboardWrap>
  )
}


export default Dashboard;