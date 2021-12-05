import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewPost = () => {
	const navigate = useNavigate();

	//extract the UserId and token from the Local Storage
	const userToken = JSON.parse(localStorage.getItem('token'));
	const utilisateur_id = userToken.userId;
	const prenom = userToken.prenom;

	/*	const token = userToken.token;
	const handleSubmit = (e) => {
		e.preventDefault();
		const post = { titre, text, utilisateur_id, date_cre };

		fetch('http://localhost:8081/api/publication', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(post),
		})
			.then(() => {

				navigate('/private/home');
			})
			.catch((error) => {
				console.error('Error:', error);
				alert('Back End NOT ready');
			});
	};

*/
	const handleCancel = () => {
		navigate('/private/home');
	};

	const [titre, setTitre] = useState('');
	const [text, setText] = useState('');
	const [date_cre, setDate_cre] = useState('');
	const post = { titre, text, utilisateur_id, date_cre };

	const [file, setFile] = useState();

	const saveFile = (e) => {
		setFile(e.target.files[0]);
	};
	console.log(file);

	const formData = new FormData();
	formData.append('file', file);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8081/api/publication', post)
			.then((res) => {
				alert('file OK');
			})
			.catch((err) => alert('file nok'));
	};

	return (
		<div className="container mb-3 mt-3">
			<h2>Créer une publication</h2>
			<p>par {prenom}</p>
			<small>User ID: {utilisateur_id}</small>
			<form onSubmit={handleSubmit} className="row g-3">
				<label>Titre:</label>
				<input
					type="text"
					required
					value={titre}
					onChange={(e) => setTitre(e.target.value)}
				/>

				<label>Texte:</label>
				<textarea
					required
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>

				<label>Date:</label>
				<input
					type="date"
					required
					value={date_cre}
					onChange={(e) => setDate_cre(e.target.value)}
				></input>

				<input type="file" name="image" onChange={saveFile} />

				<div className="d-grid gap-2 d-md-block">
					<button
						className="btn btn-outline-secondary "
						type="button"
						onClick={handleCancel}
					>
						Cancel{' '}
					</button>

					<button className="btn btn-primary">Publier</button>
				</div>
			</form>
		</div>
	);
};
export default NewPost;
