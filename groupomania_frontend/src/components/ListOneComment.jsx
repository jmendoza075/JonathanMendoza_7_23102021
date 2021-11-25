import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ListOneComment() {
	const params = useParams();
	const params_id = params.id;

	const url = 'http://localhost:8081/api/commentaire/';
	const [comment, setComment] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getComment = response.data;
				setComment(getComment);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	const handleCancel = () => {
		navigate('/');
	};

	const handleModify = () => {
		navigate(`/comments/edit/${params.id}`);
	};

	const handleDelete = () => {
		axios
			.delete(`${url}${params.id}`)
			.then((response) => {
				console.log(`comment ${params_id} deleted`);
				navigate('/');
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
			<button onClick={handleCancel} className="btn btn-outline-secondary ">
				Cancel
			</button>
			<button onClick={handleModify} className="btn btn-primary btn-block">
				Modify
			</button>
			<button onClick={handleDelete} className="btn btn-primary btn-block">
				Delete
			</button>
		</div>
	);
}
