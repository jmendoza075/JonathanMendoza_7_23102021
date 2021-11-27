import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
	const [titre, setTitre] = useState('');
	const [text, setText] = useState('');
	const [utilisateur_id, setUtilisateur_id] = useState('');
	const [date_cre, setDate_cre] = useState('');

	const [isPending, setIsPending] = useState(false);

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const post = { titre, text, utilisateur_id, date_cre };

		setIsPending(true);

		fetch('http://localhost:8081/api/publication', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
			<form onSubmit={handleSubmit} className="row g-3">
				<label>Post titre:</label>
				<input
					type="text"
					required
					value={titre}
					onChange={(e) => setTitre(e.target.value)}
				/>
				<label>User ID#:</label>
				<textarea
					required
					value={utilisateur_id}
					onChange={(e) => setUtilisateur_id(e.target.value)}
				></textarea>

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
