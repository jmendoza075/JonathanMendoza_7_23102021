import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateOutlet = () => {
	const getToken = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.token;
	};
	const [token] = useState(getToken());

	return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
