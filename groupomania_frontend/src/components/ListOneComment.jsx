import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ListOneComment() {
	const params = useParams();
	const params_id = params.id;

	const url = 'http://localhost:8081/api/commentaire/';
	const [comment, setComment] = useState([]);
	const [userId, setUserId] = useState();

	const [disabled, setDisabled] = useState(true);
	const navigate = useNavigate();

	//see if user's role admin
	const getRole = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.role;
	};
	const [role] = useState(getRole());

	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getComment = response.data;
				setComment(getComment);
				setUserId(getComment[0].utilisateur_id);
			})
			.catch((error) => console.error(`Error:${error}`));

		const userToken = JSON.parse(localStorage.getItem('token'));
		const loggedUser = userToken.userId;

		if (role === 'admin' || loggedUser === userId) {
			setDisabled(false);
		}
	}, [params.id, userId, role]);

	//Button manangement
	const handleCancel = () => {
		navigate('/private/home');
	};

	const handleModify = () => {
		navigate(`/private/comments/edit/${params.id}`);
	};

	const handleDelete = () => {
		axios
			.delete(`${url}${params.id}`)
			.then((response) => {
				console.log(`comment ${params_id} deleted`);
				navigate('/private/home');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	return (
		<div className="container mt-3 ">
			<h3>Comment # id {params_id}</h3>
			<div>
				{comment.map((myComment) => (
					<div key={myComment.id}>
						<p>{myComment.comment} </p>
						<p>by user id: {myComment.utilisateur_id}</p>

						<small>about post id: {myComment.publication_id}</small>
						<small> on: {myComment.date_cre}</small>
					</div>
				))}
			</div>
			<button onClick={handleCancel} className="btn btn-secondary ">
				Cancel
			</button>{' '}
			<button
				onClick={handleModify}
				className="btn btn-primary btn-block"
				disabled={disabled}
			>
				Modifier
			</button>{' '}
			<button
				onClick={handleDelete}
				className="btn btn-danger btn-block"
				disabled={disabled}
			>
				Supprimer
			</button>
		</div>
	);
}
