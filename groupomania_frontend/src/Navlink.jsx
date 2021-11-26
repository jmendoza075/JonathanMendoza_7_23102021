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
				<Logout />
				<Link to="/users/signup" className="nav-link">
					SignUp
				</Link>
				<Link to="/users" className="nav-link">
					All Users
				</Link>

				<Link to="/publications/add" className="nav-link">
					New Post
				</Link>
			</nav>
			<Outlet />
		</div>
	);
}
