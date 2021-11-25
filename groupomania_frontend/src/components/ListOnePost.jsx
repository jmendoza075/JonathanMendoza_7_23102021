import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function OnePost() {
	const params = useParams();
	const params_id = params.id;

	const url = 'http://localhost:8081/api/publication/';

	const [post, setPost] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getPost = response.data;
				setPost(getPost);
				console.log(getPost[0].email);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	const handleCancel = () => {
		navigate('/');
	};

	const handleModify = () => {
		navigate(`/publications/edit/${params.id}`);
	};

	const handleDelete = () => {
		axios
			.delete(`${url}${params.id}`)
			.then((response) => {
				console.log(`post ${params_id} deleted`);
				navigate('/');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	return (
		<div className="container ">
			<h2>Single Post # id {params_id} </h2>
			<div>
				{post.map((myPost) => (
					<div key={myPost.id}>
						<h3>
							Post id: {myPost.id} {myPost.titre}{' '}
						</h3>
						<p>Posted by user id: {myPost.utilisateur_id}</p>
						<p>{myPost.text}</p>
						<p>on {myPost.date_cre}</p>

						<p> {myPost.comment}</p>
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
