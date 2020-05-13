import React, { useState } from 'react';
import { adminDashboardTabs } from '../../../../data';
import TabList from './TabList';
import Display from './Display';
import {DashboardWrap, TabsWrap, DisplayWrap} from '../mainStyle/styledComponent.js';

function Dashboard() {
const [navigation, setNavigation] = useState("students");
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