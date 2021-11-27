import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FilteredPostComment from './FilteredPostComment';

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
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	const handleCancel = () => {
		navigate('/private/home');
	};

	const handleModify = () => {
		navigate(`/private/publications/edit/${params.id}`);
	};

	const handleDelete = () => {
		axios
			.delete(`${url}${params.id}`)
			.then((response) => {
				console.log(`post ${params_id} deleted`);
				navigate('/private/home');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	return (
		<div className="container mt-3 ">
			<div>
				{post.map((myPost) => (
					<div key={myPost.id}>
						<h2>{myPost.titre} </h2>
						<p>Posted by user ID: {myPost.utilisateur_id}</p>
						<p>Post id #: {myPost.id}</p>
						<p>{myPost.text}</p>
						<p>on {myPost.date_cre}</p>

						<p> {myPost.comment}</p>
					</div>
				))}
			</div>

			<button onClick={handleCancel} className="btn btn-outline-secondary ">
				Cancel
			</button>
			<button onClick={handleModify} className="btn btn-secondary btn-block">
				Modify
			</button>
			<button onClick={handleDelete} className="btn btn-primary btn-block">
				Delete
			</button>
			<hr />
			<hr />
			<FilteredPostComment postId={params_id} />
		</div>
	);
}
