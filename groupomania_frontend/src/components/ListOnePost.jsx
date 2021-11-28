import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FilteredPostComment from './FilteredPostComment';

export default function OnePost() {
	const params = useParams();
	const params_id = params.id;
	const navigate = useNavigate();

	const url = 'http://localhost:8081/api/publication/';
	const [post, setPost] = useState([]);

	//Get and Loads data from API
	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getPost = response.data;
				setPost(getPost);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	//Buttons function
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
				{post.map((mapPost) => (
					<div key={mapPost.id}>
						<h2>{mapPost.titre} </h2>
						<p>Posted by user ID: {mapPost.utilisateur_id}</p>
						<p>Post id #: {mapPost.id}</p>
						<p>{mapPost.text}</p>
						<p>on {mapPost.date_cre}</p>
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
