import { Outlet, Link } from 'react-router-dom';

import Navlogo from './components/NavLogo';
import Logout from './routes/Logout';

export default function Navlink() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/private/home" className="nav-link">
					<Navlogo />
				</Link>
				<Logout />

				<Link to="/private/users" className="nav-link">
					All Users
				</Link>

				<Link to="/private/publications/add" className="nav-link">
					New Post
				</Link>
			</nav>
			<Outlet />
		</div>
	);
}
