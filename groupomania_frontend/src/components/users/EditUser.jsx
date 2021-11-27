import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
	const params = useParams();
	const params_id = params.id;

	const [user, setUser] = useState([]);

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
				setUser(getUser);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	// Buttons
	const handleCancel = () => {
		navigate('/private/home');
	};

	const updateUser = () => {
		const userMod = { prenom, nom, email, password };

		axios
			.put(`${url}${params.id}`, userMod)
			.then((response) => {
				console.log(`post ${params_id} modified`);
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	return (
		<div className="container mt-3">
			<h3>Modify User </h3>

			<div>
				{user.map((myUser) => (
					<div key={myUser.id}>
						<h2>
							User id: {myUser.id} {myUser.user}{' '}
						</h2>
						<p>
							{myUser.prenom} {myUser.nom}
						</p>
						<span>on {myUser.email}</span>
						<span> about post id{myUser.password}</span>
					</div>
				))}
			</div>

			<hr />

			<div>
				<label>
					<p>nom</p>
					<input
						type="text"
						value={nom}
						onChange={(e) => {
							setNom(e.target.value);
						}}
					/>{' '}
				</label>
				<br />
				<br />
				<label>
					<p>prenom</p>
				</label>
				<input
					type="text"
					value={prenom}
					onChange={(e) => {
						setPrenom(e.target.value);
					}}
				/>{' '}
				<br />
				<br />
				<label>
					<p>Email</p>
					<input
						type="text"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>{' '}
				</label>
				<br />
				<br />
				<label>
					<p>password</p>
					<input
						type="text"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>{' '}
				</label>
				<br />
				<br />
			</div>

			<div>
				<button onClick={handleCancel} className="btn btn-outline-secondary ">
					Cancel
				</button>

				<button onClick={updateUser} className="btn btn-primary btn-block">
					Modify User
				</button>
			</div>
		</div>
	);
};

export default EditUser;
