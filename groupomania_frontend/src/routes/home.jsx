import { useState } from 'react';
import Publications from './publications';

import HomeAdmin from './HomeAdmin';

const Home = () => {
	const getRole = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.role;
	};

	const [role] = useState(getRole());

	return (
		<div className="container mb-3 mt-3">
			{role === 'admin' && <HomeAdmin />}

			<hr />
			<Publications />
			<hr />
		</div>
	);
};

export default Home;
