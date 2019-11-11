import styled from 'styled-components';

export const FormWrap = styled.form`
  // background: #EDEEEF;
  border: 0px transparant;
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease;
`

export const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: 1px solid transparent;
  background: white;
  width: 100%;
  height: 26px;
`

export const Button = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 3px;
  margin: 10px;
  background: #EDEEEF;
  text-align: left;
`

export const DropdownContent =  styled.div`
  display: block;
  position: absolute;
  width: 40px;
  background: red;
  z-index: 1;
`

export const DashboardWrap = styled.div`
  display: flex;
  padding: 0 0 0 0;
  
`
export const TabsWrap = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 100px;
  // overflow-x: hidden;
  background: #269FB0;
`
export const DisplayWrap = styled.div`
  width: 85%;
  height: 100vh;
  position: relative;
  top: 120px;
  left: 200px;
  // overflow-x: hidden;
`
export const TabWrap = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  vertical-alignment: center; 
  color: white;
  // margin: 0 0 30px 0;
`
export const TabsWrapColumn = styled.div`
  display: flex;
  flex-direction: column;
  // overflow: scroll;
  // padding-top: 25px;
`

export const RedButton = styled.button`
  background-color: #FFC8C8;
  padding: 12px 28px;
  border-radius: 4px;
`;