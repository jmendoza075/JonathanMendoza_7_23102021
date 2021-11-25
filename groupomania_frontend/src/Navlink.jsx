import { Outlet, Link } from 'react-router-dom';

import Navlogo from './components/NavLogo';
import Logout from './components/users/Logout';

export default function Navlink() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/" className="nav-link">
					<Navlogo />
				</Link>
				<Link to="users/signup" className="nav-link">
					S'inscrire
				</Link>
				<Link to="/users" className="nav-link">
					All Users
				</Link>
				<Link to="/publications" className="nav-link">
					All Publications
				</Link>{' '}
				<Link to="/comments" className="nav-link">
					All Comments
				</Link>
				<Link to="/publications/add" className="nav-link">
					New Post
				</Link>
				<Logout />
			</nav>
			<Outlet />
		</div>
	);
}
