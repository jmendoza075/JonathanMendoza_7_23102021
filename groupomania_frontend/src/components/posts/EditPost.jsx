import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
	const params = useParams();
	const params_id = params.id;
	const [titre, setTitre] = useState('');
	const [date_mod, setDate_mod] = useState('');
	const [text, setText] = useState('');

	const url = 'http://localhost:8081/api/publication/';

	//Recover Single Post from API

	useEffect(() => {
		axios
			.get(`${url}${params.id}`)
			.then((response) => {
				const getPost = response.data;
				setTitre(getPost[0].titre);
				setText(getPost[0].text);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	////Update the Post

	const navigate = useNavigate();

	//// send File and Data

	const [file, setFile] = useState(false);
	const saveFile = (e) => {
		setFile(e.target.files[0]);
	};

	/// Determine the contents of the Payload: with or without Photo (file)
	const onlyData = { titre, date_mod, text };

	const fileNData = new FormData();
	fileNData.append('file', file);
	fileNData.append('titre', titre);
	fileNData.append('text', text);
	fileNData.append('date_cre', date_mod);

	const payLoad = !file ? onlyData : fileNData;

	const modifyPost = (e) => {
		e.preventDefault();
		axios
			.put(`${url}${params.id}`, payLoad)
			.then((response) => {
				alert(`post ${params_id} modifié`);
				navigate('/private/home');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	const handleCancel = () => {
		navigate('/private/home');
	};

	return (
		<div className="container mt-3">
			<h2>Modifier la publication</h2>
			<small> #{params_id} </small>
			<hr />
			<form onSubmit={modifyPost}>
				<div className="row">
					<div className="col" id="col-left"></div>
					<div className="col-md-9">
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon1">
								Titre
							</label>
							<input
								className="form-control"
								aria-describedby="basic-addon1"
								placeholder="Titre"
								type="text"
								value={titre}
								onChange={(e) => {
									setTitre(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon2">
								Texte
							</label>
							<textarea
								className="form-control"
								aria-describedby="basic-addon2"
								placeholder="Texte"
								type="text"
								value={text}
								onChange={(e) => {
									setText(e.target.value);
								}}
							/>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon3">
								Date:
							</label>
							<input
								className="form-control"
								aria-describedby="basic-addon3"
								placeholder="Date"
								type="date"
								required
								value={date_mod}
								onChange={(e) => {
									setDate_mod(e.target.value);
								}}
							/>
						</div>

						<small>Ajouter une image</small>
						<div className="input-group mb-3">
							<label id="basic-addon4"></label>
							<input
								className="form-control"
								aria-describedby="basic-addon4"
								placeholder="Image"
								type="file"
								name="file"
								onChange={saveFile}
							></input>
						</div>

						<div className="d-grid gap-2 d-md-block">
							<button onClick={handleCancel} className="btn btn-secondary ">
								Cancel
							</button>

							<button className="btn btn-primary btn-block">Modifier</button>
						</div>
					</div>
					<div className="col" id="col-right"></div>
				</div>
			</form>
			<hr />
		</div>
	);
};
export default EditPost;
