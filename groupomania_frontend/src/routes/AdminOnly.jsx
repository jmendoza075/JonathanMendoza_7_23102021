import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminOnly = () => {
	//get token and see if user's role= admin
	const tokenData = JSON.parse(localStorage.getItem('token'));
	const token = tokenData.token;
	const role = tokenData.role;

	axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

	return role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default AdminOnly;
