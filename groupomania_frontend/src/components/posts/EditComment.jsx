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
			<h2>Edit My Comment #{params_id} </h2>
			<form onSubmit={handleSubmit} className="row g-3">
				<label>Post comment:</label>
				<input
					type="text"
					required
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>

				<label>Comment Date Modified:</label>
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
						Cancel
					</button>

					<button className="btn btn-primary">Modify Comment</button>
				</div>
			</form>
		</div>
	);
};
export default EditComment;
