import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NewComment = () => {
	const params = useParams();
	const params_id = params.id;
	const navigate = useNavigate();

	//Comment to Post to API
	const [title, setTitle] = useState('');
	const [publication_id, setPublication_id] = useState('');
	const [comment, setComment] = useState('');

	const [date_cre, setDate_cre] = useState('');

	//Get Post Title from Local Storage
	useEffect(() => {
		getPost();
	}, []);

	//extract the UserId, Title and PostId from the Local Storage
	const userToken = JSON.parse(localStorage.getItem('token'));
	const utilisateur_id = userToken.userId;
	const token = userToken.token;
	const prenom = userToken.prenom;

	const getPost = () => {
		const Titre = localStorage.getItem('Titre');
		const PostID = localStorage.getItem('PostID');
		setTitle(Titre);
		setPublication_id(PostID);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const postComment = { comment, publication_id, utilisateur_id, date_cre };

		fetch('http://localhost:8081/api/commentaire/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(postComment),
		})
			.then(() => {
				navigate('/private/home/');
			})
			.catch((error) => {
				console.error('Error:', error);
				alert('Back End NOT ready');
			});
	};

	const handleCancel = () => {
		navigate('/private/home');
	};

	return (
		<div className="container mt-3">
			<h2>
				Commentaire sur post # {params_id}: {title}
			</h2>
			<hr />
			<p>
				Commenté par {prenom}, <small>User ID: {utilisateur_id}</small>
			</p>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col" id="column_left"></div>
					<div className="col-9" id="column_center">
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon1">
								Commenter:
							</label>
							<textarea
								className="form-control"
								aria-describedby="basic-addon1"
								placeholder="Texte"
								required
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</div>

						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon2">
								Date:
							</label>
							<input
								className="form-control"
								aria-describedby="basic-addon2"
								placeholder="Date"
								type="date"
								required
								value={date_cre}
								onChange={(e) => setDate_cre(e.target.value)}
							></input>
						</div>

						<div className="d-grid gap-2 d-md-block">
							<button
								className="btn btn-secondary "
								type="button"
								onClick={handleCancel}
							>
								Cancel{' '}
							</button>

							<button className="btn btn-primary">Add Comment</button>
						</div>
					</div>
					<div className="col" id="column_right"></div>
				</div>
			</form>
		</div>
	);
};
export default NewComment;
