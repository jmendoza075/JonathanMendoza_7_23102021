import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ListItem = ({
	titre,
	text,
	prenom,
	utilisateur,
	id,
	imageUrl,
	comment,
	date,
}) => {
	//see if user's role admin
	const getRole = () => {
		const tokenString = localStorage.getItem('token');
		const userToken = JSON.parse(tokenString);
		return userToken?.role;
	};
	const [role] = useState(getRole());

	//recover logged-in userid and if role is moderator

	useEffect(() => {
		const userToken = JSON.parse(localStorage.getItem('token'));
		const loggedUser = userToken.userId;

		if (role === 'admin' || loggedUser === utilisateur) {
			setDisabled(false);
		}
	}, [utilisateur, role]);

	const navigate = useNavigate();

	//Button manangement
	const [disabled, setDisabled] = useState(true);
	const handleComment = () => {
		localStorage.setItem('PostID', id);
		localStorage.setItem('Titre', titre);

		navigate(`/private/comments/comment/${id}`);
	};

	const handleDelete = () => {
		axios
			.delete(`http://localhost:8081/api/publication/${id}`)
			.then((response) => {
				alert(`publication ${id} est supprimée`);
				window.location.reload();
				navigate('/private/home');
			})
			.catch((error) => console.error(`Error:${error}`));
	};
	const handleModify = () => {
		navigate(`/private/publications/edit/${id}`);
	};

	return (
		<div className="row">
			<div className="col" id="column_left"></div>

			<div className="col-10" id="column_center">
				<ul className="list-group">
					<li className="list-group-item  mt-3 btn p-2">
						<Link
							to={`/private/publications/${id}`}
							activeclassname="active"
							style={{ textDecoration: 'none' }}
						>
							<h2>{titre}</h2>
							<h6> {text}</h6>

							<small>par {prenom}</small>
							<div>
								<img
									src={imageUrl}
									alt="post_photo"
									className="rounded mx-auto d-block img-fluid"
								/>
							</div>
							<div>
								<small>
									post #{id}, le: {date}{' '}
								</small>
							</div>
						</Link>
						<hr />
						<button
							onClick={handleModify}
							className="btn btn-outline-secondary btn-sm "
							disabled={disabled}
						>
							Modifier la publication
						</button>{' '}
						<button
							onClick={handleDelete}
							className="btn btn-outline-danger btn-sm "
							disabled={disabled}
						>
							Supprimer
						</button>{' '}
						<button
							onClick={handleComment}
							className="btn btn-outline-primary btn-sm"
						>
							Commenter
						</button>
					</li>
				</ul>
			</div>
			<div className="col" id="column_left"></div>
		</div>
	);
};

export default ListItem;
