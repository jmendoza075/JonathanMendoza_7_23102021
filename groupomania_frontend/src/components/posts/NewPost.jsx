import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
	const [titre, setTitre] = useState('');
	const [text, setText] = useState('');
	const [date_cre, setDate_cre] = useState('');
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

	//extract the UserId and token from the Local Storage
	const userToken = JSON.parse(localStorage.getItem('token'));
	const utilisateur_id = userToken.userId;
	const token = userToken.token;

	const handleSubmit = (e) => {
		e.preventDefault();
		const post = { titre, text, utilisateur_id, date_cre };

		setIsPending(true);

		fetch('http://localhost:8081/api/publication', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(post),
		})
			.then(() => {
				setIsPending(false);
				navigate('/private/home');
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
			<h2>Add a New Post</h2>
			<p>Posted by User ID: {utilisateur_id}</p>
			<form onSubmit={handleSubmit} className="row g-3">
				<label>Post titre:</label>
				<input
					type="text"
					required
					value={titre}
					onChange={(e) => setTitre(e.target.value)}
				/>

				<label>Text:</label>
				<textarea
					required
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>

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

					{!isPending && <button className="btn btn-primary">Add Post</button>}
					{isPending && <button disabled>Adding Post...</button>}
				</div>
			</form>
		</div>
	);
};
export default NewPost;
