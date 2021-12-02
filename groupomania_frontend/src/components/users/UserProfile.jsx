import { useState } from 'react';
import ListOneUser from '../ListOneUser';
import { Container } from 'react-bootstrap';

const UserProfile = () => {
	const getPrenom = () => {
		const userToken = JSON.parse(localStorage.getItem('token'));
		return userToken?.prenom;
	};
	const [prenom] = useState(getPrenom());
	return (
		<Container className="mt-2">
			<h1>Hello {prenom} This is your profile</h1>
			<ListOneUser />
		</Container>
	);
};

export default UserProfile;
