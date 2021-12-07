import React, { useState } from 'react';
import useToken from '../custom_hook/useToken';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
	const { token, setToken } = useToken();
	axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		const token = await loginUser({
			email,
			password,
		});

		async function loginUser(credentials) {
			return fetch('http://localhost:8081/api/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(credentials),
			})
				.then((data) => data.json())

				.catch((error) => {
					console.error('Error:', error);
				});
		}

		setToken(token);
		//console.log(token.error);
		token.error ? setError(token.error) : navigate('/private/home');
	};

	return (
		<div className="container mt-5">
			<h2>Veuillez vous connecter</h2>

			{error && (
				<div className="alert alert-danger" role="alert">
					{error}{' '}
				</div>
			)}

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						required
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>{' '}
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						required
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>{' '}
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
				<hr />

				<Link
					to="/signup"
					activeclassname="active"
					style={{ textDecoration: 'none' }}
				>
					<small>ou cliquez ici pour vous inscrire</small>
				</Link>
			</Form>
		</div>
	);
}
