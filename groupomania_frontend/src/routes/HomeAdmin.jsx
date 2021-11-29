import { Link } from 'react-router-dom';

const HomeAdmin = () => {
	return (
		<div>
			<h1>ADMIN Home</h1>
			<hr />
			<Link to="/private/publications/" className="nav-link">
				All Posts
			</Link>

			<Link to="/private/publications/add" className="nav-link">
				New Post
			</Link>
			<hr />

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
