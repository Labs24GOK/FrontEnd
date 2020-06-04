import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const StaffSettings = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const [staffData, setStaffData] = useState();

  const token = localStorage.getItem('token');
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  const { subject } = tokenData;

  useEffect(() => {
    axiosWithAuth()
      .get(`/staffdashboard/${subject}`)
      .then(res => {
        setStaffData(res.data)
      })
      .catch(err => {
          console.log("Something broke!", err)
      })
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`${url}/edit`);
  };

  return (
      <>
      <h1>Staff Settings</h1>
      </>
  )
};

export default StaffSettings;
