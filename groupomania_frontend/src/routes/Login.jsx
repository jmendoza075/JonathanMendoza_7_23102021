import React, { useState } from 'react';
import useToken from '../custom_hook/useToken';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
			<form onSubmit={handleSubmit} className="row g-3">
				<div className="form-group">
					{error && (
						<div className="alert alert-danger" role="alert">
							{error}{' '}
						</div>
					)}

					<label> Email</label>

					<input
						type="text"
						required
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Password</label>

					<input
						type="password"
						required
						onChange={(e) => setPassword(e.target.value)}
						className="form-control"
					/>
				</div>

				<div>
					<button type="submit" className="btn btn-primary btn-block">
						Login
					</button>
				</div>
			</form>
		</div>
	);
}
