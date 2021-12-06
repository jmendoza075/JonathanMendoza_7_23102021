import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const [prenom, setPrenom] = useState('');
	const [nom, setNom] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPswd] = useState('');

	const [error, setError] = useState(null);

	const navigate = useNavigate();

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
			.then((res) => {
				console.log(res);
				if (!res.ok) {
					throw Error('Email déjà utilisée');
				}
				alert('Inscription réussie, veuillez vous connecter');
				navigate('/login');
			})

			.catch((error) => {
				console.error('Error:', error);
				setError(error.message);
			});
	};

	return (
		<div className="container mt-3">
			<h3>S'inscrire</h3>
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
				{error && (
					<div className="alert alert-danger" role="alert">
						{error}{' '}
					</div>
				)}
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
					<button className="btn btn-primary btn-block">Enregistrer</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
