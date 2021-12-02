import { Outlet } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

import Logout from './routes/Logout';

export default function Navlink() {
	return (
		<div>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand href="/private/home">Groupomania</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="justify-content-end">
							<Nav.Item>
								<Nav.Link href="/private/home">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/private/publications/add">Publier</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/private/users/profile/">Mon profile</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container className="mt-2">
				<Logout />
			</Container>

			<Outlet />
		</div>
	);
}
