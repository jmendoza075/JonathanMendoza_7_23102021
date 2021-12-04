import { useState } from 'react';
import Publications from './publications';
import { Button } from 'react-bootstrap';
import HomeAdmin from './HomeAdmin';

const Home = () => {
	const getRole = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.role;
	};
	const [role] = useState(getRole());

	const getPrenom = () => {
		const userToken = JSON.parse(localStorage.getItem('token'));
		return userToken?.prenom;
	};
	const [prenom] = useState(getPrenom());

	const getUserId = () => {
		const userToken = JSON.parse(localStorage.getItem('token'));
		return userToken?.userId;
	};
	const [userId] = useState(getUserId());

	return (
		<div className="container mb-3 mt-3">
			{role === 'admin' && <HomeAdmin />}

			<div>
				<h1>Bonjour {prenom} </h1>
				<Button
					href={`/private/users/${userId}`}
					variant="outline-secondary"
					size="sm"
				>
					Gerer mon profil
				</Button>
			</div>

			<Publications />
			<hr />
		</div>
	);
};

export default Home;
