import { useState } from 'react';
import Publications from './publications';

import HomeAdmin from './HomeAdmin';
import HomeModerator from './HomeModerator';

const Home = () => {
	const getRole = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.role;
	};

	const [role] = useState(getRole());

	console.log(`role:${role}`);

	return (
		<div className="container mt-3">
			{role === 'admin' && <HomeAdmin />}
			{role === 'moderator' && <HomeModerator />}

			<hr />
			<Publications />
			<hr />
		</div>
	);
};

export default Home;
