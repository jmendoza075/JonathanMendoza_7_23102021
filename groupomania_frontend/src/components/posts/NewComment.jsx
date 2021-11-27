import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NewComment = () => {
	const params = useParams();
	const params_id = params.id;
	const [isPending, setIsPending] = useState(false);

	const navigate = useNavigate();

	//Get Post data from Local Storage
	const [title, setTitle] = useState('');

	useEffect(() => {
		setTitle(localStorage.getItem('Titre'));
		setPublication_id(localStorage.getItem('PostID'));

		getToken();
	}, []);

	const getToken = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);

		setUtilisateur_id(userToken.userId);
	};

	//Coment to Post to API
	const [publication_id, setPublication_id] = useState('');
	const [comment, setComment] = useState('');
	const [utilisateur_id, setUtilisateur_id] = useState('');
	const [date_cre, setDate_cre] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const postComment = { comment, publication_id, utilisateur_id, date_cre };

		setIsPending(true);

		fetch('http://localhost:8081/api/commentaire/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postComment),
		})
			.then(() => {
				setIsPending(false);
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
		<div className="container mb-3 mt-3">
			<h2>
				Commenting on post # {params_id} {title}{' '}
			</h2>
			<p>Commented by {utilisateur_id}</p>
			<form onSubmit={handleSubmit} className="row g-3">
				<label>Type your comment here </label>
				<textarea
					required
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>

				<label>Post Date:</label>
				<input
					type="date"
					required
					value={date_cre}
					onChange={(e) => setDate_cre(e.target.value)}
				></input>

				<div className="d-grid gap-2 d-md-block">
					<button
						className="btn btn-outline-secondary "
						type="button"
						onClick={handleCancel}
					>
						Cancel{' '}
					</button>

					{!isPending && (
						<button className="btn btn-primary">Add Comment</button>
					)}
					{isPending && <button disabled>Adding Comment...</button>}
				</div>
			</form>
		</div>
	);
};
export default NewComment;
