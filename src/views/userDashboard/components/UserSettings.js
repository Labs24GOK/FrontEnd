import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import './UserSettings.scss';
import { PrimaryButton } from '../../../styles/BtnStyle';

const UserSettings = () => {
	const { url } = useRouteMatch();
	const history = useHistory();

	// Extracting User details from user's token
	const token = localStorage.getItem('token');
	const tokenData = JSON.parse(atob(token.split('.')[1]));
	console.log(tokenData);
	const { email, name } = tokenData;

	const handleSubmit = e => {
		e.preventDefault();
		history.push(`${url}/edit`);
	};

	return (
		<div className='settings-container'>
			<h1>Review Settings</h1>
			<div className='input-group'>
				<label>Full Name:</label>
				<p>{name}</p>
				<label>Email:</label>
				<p>{email}</p>
			</div>
			<PrimaryButton onClick={handleSubmit}>Edit</PrimaryButton>
		</div>
	);
};

export default UserSettings;
