import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const [prenom, setPrenom] = useState('');
	const [nom, setNom] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPswd] = useState('');

	const navigate = useNavigate();
	const handleCancel = () => {
		navigate('/');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const post = { prenom, nom, email, password };

		fetch('http://localhost:8081/api/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(post),
		})
			.then(() => {
				alert('User enregistré');
				navigate('/users');
			})
			.catch((error) => {
				console.error('Error:', error);
				alert('Back End NOT ready');
			});
	};

	return (
		<div className="container mt-3">
			<h2>S'inscrire</h2>
			<form onSubmit={handleSubmit} className="row g-3">
				<div className="form-group">
					<label>Prenom</label>
					<input
						type="text"
						required
						value={prenom}
						className="form-control"
						placeholder="Prenom"
						onChange={(e) => setPrenom(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Nom</label>
					<input
						type="text"
						required
						value={nom}
						className="form-control"
						placeholder="Nom"
						onChange={(e) => setNom(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						required
						value={email}
						className="form-control"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						required
						value={password}
						type="password"
						className="form-control"
						placeholder="Password"
						onChange={(e) => setPswd(e.target.value)}
					/>
				</div>

				<div>
					<button
						className="btn btn-outline-secondary "
						type="button"
						onClick={handleCancel}
					>
						Cancel
					</button>

					<button className="btn btn-primary btn-block">Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
