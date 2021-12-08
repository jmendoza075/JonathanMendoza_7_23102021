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

	//see if user's role admin
	const getRole = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.role;
	};
	const [role] = useState(getRole());

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
				alert('Utilisateur modifié ! ');
			})
			.catch((error) => console.error(`Error:${error}`));
		role === 'admin' ? navigate('/private/home') : navigate('/login');
	};

	return (
		<div className="container mt-3">
			<h3>Modify the User with Id: {userId} </h3>

			<hr />
			<form onSubmit={updateUser}>
				<div className="row">
					<div className="col" id="column_left"></div>
					<div className="col-9" id="column_center">
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon1">
								Nom
							</label>
							<input
								type="text"
								className="form-control"
								aria-describedby="basic-addon1"
								placeholder="Nom"
								required
								value={nom}
								onChange={(e) => {
									setNom(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon2">
								Prenom
							</label>
							<input
								type="text"
								className="form-control"
								aria-describedby="basic-addon2"
								placeholder="Prenom"
								required
								value={prenom}
								onChange={(e) => {
									setPrenom(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon3">
								Email
							</label>
							<input
								type="text"
								className="form-control"
								aria-describedby="basic-addon3"
								placeholder="Email"
								required
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon4">
								Password
							</label>
							<input
								type="text"
								required
								className="form-control"
								aria-describedby="basic-addon4"
								placeholder="Password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<hr />
						<div>
							<button onClick={handleCancel} className="btn btn-secondary ">
								Cancel
							</button>

							<button className="btn btn-primary btn-block">Modifier</button>
						</div>
					</div>
					<div className="col" id="column_right"></div>
				</div>
			</form>
		</div>
	);
};

export default EditUser;
