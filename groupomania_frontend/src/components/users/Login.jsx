import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
	return fetch('http://localhost:8081/api/user/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export default function Login({ setToken }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser({
			email,
			password,
		});
		setToken(token);
	};

	return (
		<div className="container mt-5">
			<h2>Veuillez vous connecter</h2>
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

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
};
