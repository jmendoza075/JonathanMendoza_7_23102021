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

	const handleClick = () => {
		axios
			.delete(`${url}${params.id}`)
			.then((response) => {
				console.log(`user ${params_id} deleted`);
				navigate('/comments');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	const handleModify = () => {
		navigate(`/users/edit/${params.id}`);
	};

	const handleCancel = () => {
		navigate('/');
	};

	return (
		<div className="container ">
			<h2>Single User # id {params_id}</h2>
			<div>
				{user.map((myUser) => (
					<div key={myUser.id}>
						<h2>
							myUser id: {myUser.id} {myUser.user}{' '}
						</h2>
						<p>
							{myUser.prenom} {myUser.nom}
						</p>
						<span>on {myUser.email}</span>
						<span> about post id{myUser.password}</span>
					</div>
				))}
			</div>
			<button onClick={handleCancel} className="btn btn-outline-secondary ">
				Cancel
			</button>
			<button onClick={handleModify} className="btn btn-outline-secondary ">
				Modify
			</button>
			<button onClick={handleClick} className="btn btn-primary btn-block">
				Delete
			</button>
		</div>
	);
}