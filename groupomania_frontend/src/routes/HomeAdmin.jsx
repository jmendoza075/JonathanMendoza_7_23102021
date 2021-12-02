import { Link } from 'react-router-dom';

const HomeAdmin = () => {
	return (
		<div className="container mt-3">
			<h1>ADMIN Home</h1>
			<hr />
			<button>
				{' '}
				<Link to="/private/publications/" className="nav-link">
					All Posts
				</Link>{' '}
			</button>
			<button>
				{' '}
				<Link to="/private/users/" className="nav-link">
					All Users
				</Link>
			</button>
			<button>
				{' '}
				<Link to="/private/comments/" className="nav-link">
					All Comments
				</Link>
			</button>
		</div>
	);
};

export default HomeAdmin;
