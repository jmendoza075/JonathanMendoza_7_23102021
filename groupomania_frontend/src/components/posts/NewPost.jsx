import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewPost = () => {
	const navigate = useNavigate();

	//extract the UserId and token from the Local Storage
	const userToken = JSON.parse(localStorage.getItem('token'));
	const utilisateur_id = userToken.userId;
	const prenom = userToken.prenom;

	const [titre, setTitre] = useState('');
	const [text, setText] = useState('');
	const [date_cre, setDate_cre] = useState('');
	//const post = { titre, text, utilisateur_id, date_cre };

	const [file, setFile] = useState();

	const saveFile = (e) => {
		setFile(e.target.files[0]);
	};

	const formData = new FormData();
	formData.append('file', file);
	formData.append('titre', titre);
	formData.append('text', text);
	formData.append('date_cre', date_cre);
	formData.append('utilisateur_id', utilisateur_id);
	formData.append('prenom', prenom);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8081/api/publication', formData)
			.then((response) => console.log(response))
			.then(() => {
				navigate('/private/home');
			})

			.catch((error) => console.log(error));
	};

	const handleCancel = () => {
		navigate('/private/home');
	};

	return (
		<div className="container mt-3">
			<h3>Créer une publication</h3>
			<hr />
			<p>
				par {prenom},<small> user ID: {utilisateur_id}</small>
			</p>

			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col" id="column_left"></div>
					<div className="col-9" id="column_center">
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon1">
								Titre:
							</label>
							<input
								type="text"
								className="form-control"
								aria-describedby="basic-addon1"
								placeholder="Titre"
								required
								value={titre}
								onChange={(e) => setTitre(e.target.value)}
							/>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon2">
								Texte:
							</label>
							<textarea
								className="form-control"
								aria-describedby="basic-addon2"
								placeholder="Texte"
								value={text}
								required
								onChange={(e) => setText(e.target.value)}
							></textarea>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon3">
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
						<small>Ajouter une image</small>
						<div className="input-group mb-3">
							<label id="basic-addon4"></label>
							<input
								className="form-control"
								aria-describedby="basic-addon4"
								placeholder="Image"
								type="file"
								required
								name="file"
								onChange={saveFile}
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

							<button className="btn btn-primary">Publier</button>
						</div>
					</div>
					<div className="col" id="column_right"></div>
				</div>
			</form>
		</div>
	);
};
export default NewPost;
