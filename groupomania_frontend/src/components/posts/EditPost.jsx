import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
	const params = useParams();
	const params_id = params.id;

	const url = 'http://localhost:8081/api/publication/';

	//Recover Single Post from API

	const [postTitle, setPostTitle] = useState('');
	const [postText, setPostText] = useState('');

	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getPost = response.data;

				console.log(getPost[0].titre);
				setPostTitle(getPost[0].titre);
				setPostText(getPost[0].text);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	////Update the Post

	const [titre, setTitre] = useState('');
	const [date_mod, setDate_mod] = useState('');
	const [text, setText] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const put = { titre, date_mod, text };

		axios
			.put(`${url}${params.id}`, put)
			.then((response) => {
				console.log(`post ${params_id} modified`);
				navigate('/private/home');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	const handleCancel = () => {
		navigate('/private/home');
	};

	return (
		<div className="container mb-3 mt-3">
			<h2>Edit Post #{params_id} </h2>
			<form onSubmit={handleSubmit} className="row g-3">
				<label>Post titre:</label>
				<input
					type="text"
					required
					defaultValue={postTitle}
					onChange={(e) => setTitre(e.target.value)}
				/>
				<label>Type your text here </label>
				<textarea
					type="text"
					required
					defaultValue={postText}
					onChange={(e) => setText(e.target.value)}
				/>

				<label>Post Date Modified:</label>
				<input
					type="date"
					required
					value={date_mod}
					onChange={(e) => setDate_mod(e.target.value)}
				></input>
				<div className="d-grid gap-2 d-md-block">
					<button
						className="btn btn-outline-secondary "
						type="button"
						onClick={handleCancel}
					>
						Cancel
					</button>

					<button className="btn btn-primary">Modify Post</button>
				</div>
			</form>
		</div>
	);
};
export default EditPost;
