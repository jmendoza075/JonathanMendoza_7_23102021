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
				setDate_mod(getPost[0].date_mod);
				setText(getPost[0].text);

				console.log(getPost[0].date_mod);
			})
			.catch((error) => console.error(`Error:${error}`));
	}, [params.id]);

	////Update the Post

	const navigate = useNavigate();

	const modifyPost = () => {
		const postMod = { titre, date_mod, text };

		axios
			.put(`${url}${params.id}`, postMod)
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
		<div className="container mt-3">
			<h2>Modifier la publication</h2>
			<small> #{params_id} </small>
			<hr />
			<div className="row">
				<div className="col"></div>
				<div className="col-9">
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">
								Titre
							</span>
						</div>
						<input
							type="text"
							className="form-control"
							aria-describedby="basic-addon1"
							value={titre}
							onChange={(e) => {
								setTitre(e.target.value);
							}}
						/>
					</div>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">
								Texte
							</span>
						</div>
						<input
							type="text"
							className="form-control"
							aria-describedby="basic-addon1"
							value={text}
							onChange={(e) => {
								setText(e.target.value);
							}}
						/>
					</div>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">
								Date Modifiée:
							</span>
						</div>
						<input
							type="date"
							className="form-control"
							aria-describedby="basic-addon1"
							value={date_mod}
							onChange={(e) => {
								setDate_mod(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="col"></div>
			</div>
			<hr />

			<div className="d-grid gap-2 d-md-block">
				<button onClick={handleCancel} className="btn btn-outline-secondary ">
					Cancel
				</button>

				<button onClick={modifyPost} className="btn btn-primary btn-block">
					Modifier
				</button>
			</div>
		</div>
	);
};
export default EditPost;
