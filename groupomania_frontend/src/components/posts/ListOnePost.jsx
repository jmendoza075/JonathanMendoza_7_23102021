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
	const handleClick = () => {
		navigate('/private/home');
	};

	return (
		<div className="container mt-3 ">
			<div>
				{post.map((mapPost) => (
					<div key={mapPost.id}>
						<h2>{mapPost.titre} </h2>
						<p>Publié par l'utilisateur: {mapPost.utilisateur_id}</p>
						<p>Post id #: {mapPost.id}</p>
						<p>{mapPost.text}</p>
						<p>on {mapPost.date_cre}</p>
					</div>
				))}
			</div>

			<button onClick={handleClick} className="btn btn-secondary ">
				À l'accueille
			</button>

			<hr />
			<hr />
			<FilteredPostComment postId={params_id} />
		</div>
	);
}
