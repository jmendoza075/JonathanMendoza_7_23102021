import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateOutlet = () => {
	const getToken = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.token;
	};
	const [token] = useState(getToken());
	axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

	return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
