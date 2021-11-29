import { Link } from 'react-router-dom';

const HomeModerator = () => {
	return (
		<div>
			<h1>MODERATOR Home</h1>
			<hr />

			<Link to="/private/comments/" className="nav-link">
				All Comments
			</Link>
		</div>
	);
};

export default HomeModerator;
