import SignUp from './SignUp';
import axios from 'axios';
import useToken from '../custom_hook/useToken';
import { Link } from 'react-router-dom';

const Welcome = () => {
	const { token, setToken } = useToken();
	axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

	return (
		<div className="container mt-3">
			<h1>Bienvenu chez Groupomania</h1>
			<h4>Please SIGN IN to register </h4>
			<SignUp setToken={setToken} />
			<hr />

			<Link
				to="/home"
				activeclassname="active"
				style={{ textDecoration: 'none' }}
			>
				<small>Ou CONNECTEZ-VOUS si vous êtes déjà inscrit</small>
			</Link>
		</div>
	);
};

export default Welcome;
