import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};

		fetch('http://localhost:8081/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => {
				console.log(res);
				if (!res.ok) {
					throw Error(
						'Non autorisé. Veuillez vérifier votre e-mail et mot de passe'
					);
				}

				navigate('/private/home');
			})

			.catch((error) => {
				console.error('Error:', error);
				setError(error.message);
			});
	};

	return (
		<div className="container mt-5">
			<h2>Veuillez vous connecter</h2>

			{error && (
				<div className="alert alert-danger" role="alert">
					{error}{' '}
				</div>
			)}
			<form onSubmit={handleSubmit} className="row g-3">
				<div className="form-group">
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
