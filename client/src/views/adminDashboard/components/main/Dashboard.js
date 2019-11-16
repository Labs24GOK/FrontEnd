import React, { useState } from 'react';
import styled from 'styled-components';
import { adminDashboardTabs } from '../../../../data';
import TabList from './TabList';
import Display from './Display';
import {DashboardWrap, TabsWrap, DisplayWrap} from '../mainStyle/styledComponent.js';

function Dashboard() {
const [navigation, setNavigation] = useState("parents");
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