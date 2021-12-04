import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logout from './routes/Logout';
import NavLogo from './NavLogo';

export default function Navlink() {
	return (
		<div>
			<Navbar className="navbar navbar-dark bg-primary  " expand="lg">
				<Container>
					<Navbar.Brand href="/private/home">
						<NavLogo />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="justify-content-end">
							<Nav.Item>
								<Nav.Link href="/private/home">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/private/publications/add">Publier</Nav.Link>
							</Nav.Item>

							<Logout />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container></Container>{' '}
			<Container className="mt-2">
				<hr className="bg-danger border-2 border-top border-danger" />
			</Container>
			<Outlet />
		</div>
	);
}
