import React, { useState } from 'react';
import styled from 'styled-components';
import { staffDashboardTabs } from '../../../../data';
import TabList from './TabList';
import Display from './Display';

const DashboardWrap = styled.div`
  display: flex;
  padding: 0px 0 0 0;
`;

const TabsWrap = styled.div`
  width: 20%;
  height: 100vh;
  // overflow: scroll;
  background: #269fb0;
`;
const DisplayWrap = styled.div`
  width: 80%;
  height: 100vh;
  // overflow: scroll;
`;

function Dashboard() {
  const [navigation, setNavigation] = useState('students');
  const [tabColor, setTabColor] = useState('transparent');
  ///// NEEDS FIXING
  return (
    <DashboardWrap>
      <TabsWrap>
        <TabList
          tabs={staffDashboardTabs}
          navigation={navigation}
          setNavigation={setNavigation}
          tabColor={tabColor}
          setTabColor={setTabColor}
        />
      </TabsWrap>

      <DisplayWrap>
        <div>
          <Display navigation={navigation} />
        </div>
      </DisplayWrap>
    </DashboardWrap>
  );
}

export default Dashboard;
