import SignUp from './SignUp';

import { Link } from 'react-router-dom';

const Welcome = () => {
	localStorage.clear();
	return (
		<div className="container mt-3 jumbotron  ">
			<h1 className="display-4 text-center">Bienvenu chez Groupomania</h1>
			<div className="container col-md-9 ">
				<SignUp />
				<hr className="bg-danger border-2 border-top border-danger" />

				<Link
					to="/login"
					activeclassname="active"
					style={{ textDecoration: 'none' }}
				>
					<p className="text-center">
						Ou CONNECTEZ-VOUS si vous êtes déjà inscrit
					</p>
				</Link>
				<hr className="bg-danger border-2 border-top border-danger" />
			</div>
		</div>
	);
};

export default Welcome;
