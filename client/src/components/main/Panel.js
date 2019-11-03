import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { tabs } from '../../data';
import TabList from './TabList';
import Display from './Display';
import NavBar from '../header/NavBar';
import StudentCard from '../students/studentCard/StudentCard';

const PanelWrap = styled.div`
  display: flex;
  padding: 0px 0 0 0;
`

const TabsWrap = styled.div`
  width: 20%;
  height: 100vh;
  // height: 700px;
  // border: 1px solid black;
  overflow: scroll;
  background: #3D7AD7;
`
const DisplayWrap = styled.div`
  width: 80%;
  height: 100vh;
  // height: 100px;
  // border: 1px solid black;
  overflow: scroll;
`

function Panel() {
const [navigation, setNavigation] = useState("students");
const [tabColor, setTabColor] = useState("transparent");

useEffect(() => {
  // console.log('PANEL props: ', props)
})

  return (
    // <div>
    // <NavBar />
    <PanelWrap>
      <TabsWrap>
        <TabList tabs={tabs} navigation={navigation} setNavigation={setNavigation} tabColor={tabColor} setTabColor={setTabColor} />
      </TabsWrap>

      <DisplayWrap>
        {/* <RowList table={table} students={students} courses={courses}/> */}
        {/* <Switch> */}
        {/* <Route exact path='/:navigation' render={props =>  */}
                    <div>
                        <Display  navigation={navigation}/>
                    </div>
                    {/* // }  */}
                    
        {/* // /> */}
        {/* <Route path='/:navigation/:id' render={props => 
                    <div>
                      <StudentCard />
                    </div>
                        } 
                    
        /> */}
        {/* </Switch> */}
      </DisplayWrap>

    </PanelWrap>
    // </div>
  )
}


export default Panel;