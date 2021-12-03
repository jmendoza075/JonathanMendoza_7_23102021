import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

import Logout from './routes/Logout';
import NavLogo from './NavLogo';

export default function Navlink() {
	const getPrenom = () => {
		const userToken = JSON.parse(localStorage.getItem('token'));
		return userToken?.prenom;
	};
	const [prenom] = useState(getPrenom());

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
							<Nav.Item>
								<Nav.Link href="/private/users/profile/">Mon profile</Nav.Link>
							</Nav.Item>
							<Logout />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container></Container>{' '}
			<Container className="mt-2">
				<hr className="bg-danger border-2 border-top border-danger" />
				<h1>Bonjour {prenom} </h1>
			</Container>
			<Outlet />
		</div>
	);
}
