import SignUp from './SignUp';

import { Link } from 'react-router-dom';

const Welcome = () => {
	localStorage.clear();

	return (
		<div className="container mt-3">
			<h1>Bienvenu chez Groupomania</h1>
			<h4>Please SIGN IN to register </h4>
			<SignUp />
			<hr className="bg-danger border-2 border-top border-danger" />

			<Link
				to="/login"
				activeclassname="active"
				style={{ textDecoration: 'none' }}
			>
				<small>Ou CONNECTEZ-VOUS si vous êtes déjà inscrit</small>
			</Link>
		</div>
	);
};

export default Welcome;
