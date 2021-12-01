import { Link } from 'react-router-dom';

const HomeAdmin = () => {
	return (
		<div className="container mt-3">
			<h1>ADMIN Home</h1>
			<hr />
			<Link to="/private/publications/" className="nav-link">
				All Posts
			</Link>

			<Link to="/private/users/" className="nav-link">
				All Users
			</Link>
			<Link to="/private/comments/" className="nav-link">
				All Comments
			</Link>
		</div>
	);
};

export default HomeAdmin;
