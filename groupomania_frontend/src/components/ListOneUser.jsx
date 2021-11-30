import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ListOneUser() {
	const params = useParams();
	const params_id = params.id;

	const url = 'http://localhost:8081/api/user/';
	const [user, setUser] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getUser = response.data;
				setUser(getUser);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	const handleDelete = () => {
		axios
			.delete(`${url}${params.id}`)
			.then((response) => {
				console.log(`user ${params_id} deleted`);
				navigate('/private/users');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	const handleModify = () => {
		navigate(`/private/users/edit/${params.id}`);
	};

	const handleCancel = () => {
		navigate('/private/users');
	};

	return (
		<div className="container mt-3">
			<h2>Profil de l'utilisateur # id {params_id}</h2>
			<div>
				{user.map((myUser) => (
					<div key={myUser.id}>
						<ul class="list-group">
							<li class="list-group-item active">
								{myUser.prenom} {myUser.nom}
							</li>
							<li class="list-group-item">User id: {myUser.id} </li>
							<li class="list-group-item">Email {myUser.email}</li>
							<li class="list-group-item">password:{myUser.password}</li>
						</ul>
					</div>
				))}
			</div>
			<hr />
			<button onClick={handleCancel} className="btn btn-outline-secondary ">
				Cancel
			</button>
			<button onClick={handleModify} className="btn btn-outline-secondary ">
				Modify
			</button>
			<button onClick={handleDelete} className="btn btn-primary btn-block">
				Delete
			</button>
		</div>
	);
}
