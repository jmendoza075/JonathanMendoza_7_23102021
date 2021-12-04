import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
	const params = useParams();
	const params_id = params.id;

	const [userId, setUserId] = useState([]);

	const [prenom, setPrenom] = useState('');
	const [nom, setNom] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const url = 'http://localhost:8081/api/user/';

	// Get the user
	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getUser = response.data;
				setUserId(getUser[0].id);
				setEmail(getUser[0].email);
				setNom(getUser[0].nom);
				setPrenom(getUser[0].prenom);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	// Buttons
	const handleCancel = () => {
		navigate('/private/home');
	};

	const updateUser = (e) => {
		e.preventDefault();
		const userMod = { prenom, nom, email, password };

		axios
			.put(`${url}${params.id}`, userMod)
			.then((response) => {
				console.log(`post ${params_id} modified`);
			})
			.catch((error) => console.error(`Error:${error}`));

		alert('Utilisateur modifié ! Veuillez vous reconnecter');
		localStorage.clear();
		navigate('/login');
	};

	return (
		<div className="container mt-3">
			<h3>Modify the User with Id: {userId} </h3>

			<hr />
			<form onSubmit={updateUser}>
				<div className="row">
					<div className="col"></div>
					<div className="col-9">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									Nom
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								aria-describedby="basic-addon1"
								required
								value={nom}
								onChange={(e) => {
									setNom(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									Prenom
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								aria-describedby="basic-addon1"
								required
								value={prenom}
								onChange={(e) => {
									setPrenom(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									Email
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								aria-describedby="basic-addon1"
								required
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									Password
								</span>
							</div>
							<input
								type="text"
								required
								className="form-control"
								aria-describedby="basic-addon1"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<hr />
						<div>
							<button
								onClick={handleCancel}
								className="btn btn-outline-secondary "
							>
								Cancel
							</button>

							<button className="btn btn-primary btn-block">Modifier</button>
						</div>
					</div>
					<div className="col"></div>
				</div>
			</form>
		</div>
	);
};

export default EditUser;
