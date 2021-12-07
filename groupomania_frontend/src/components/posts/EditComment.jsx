import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditComment = () => {
	const params = useParams();
	const params_id = params.id;

	const url = 'http://localhost:8081/api/commentaire/';

	const [comment, setComment] = useState('');
	const [date_cre, setDate_cre] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const put = { comment, date_cre };

		axios
			.put(`${url}${params.id}`, put)
			.then((response) => {
				console.log(`Comment ${params_id} modified`);
				navigate('/private/home');
			})
			.catch((error) => console.error(`Error:${error}`));
	};

	const handleCancel = () => {
		navigate('/private/home');
	};

	return (
		<div className="container mb-3 mt-3">
			<h3>Modifier mon commentaire </h3>
			<hr />

			<form onSubmit={handleSubmit} className="row g-3 mt-3">
				<div className="row">
					<div className="container col-md-9 ">
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon1">
								Commentaire:
							</label>
							<textarea
								className="form-control"
								aria-describedby="basic-addon1"
								placeholder="Commentaire"
								type="text"
								required
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</div>
						<div className="input-group mb-3">
							<label className="input-group-text" id="basic-addon2">
								Date Modifiée:
							</label>
							<input
								className="form-control"
								aria-describedby="basic-addon1"
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
								Cancel
							</button>{' '}
							<button className="btn btn-primary">Modify Comment</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
export default EditComment;
