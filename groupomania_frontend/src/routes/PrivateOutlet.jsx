import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateOutlet = () => {
	const getToken = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.token;
	};
	const [token, setToken] = useState(getToken());

	return token ? <Outlet /> : <Navigate to="/test" />;
};

export default PrivateOutlet;
