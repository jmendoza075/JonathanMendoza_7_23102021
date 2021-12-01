import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ListItem = ({ titre, text, utilisateur, id, type, comment, date }) => {
	const [disabled, setDisabled] = useState(true);
	//recover logged-in userid

	useEffect(() => {
		const userToken = JSON.parse(localStorage.getItem('token'));
		const loggedUser = userToken.userId;

		if (loggedUser === utilisateur) {
			setDisabled(false);
		}
	}, [utilisateur]);

	const navigate = useNavigate();

	const handleComment = () => {
		localStorage.setItem('PostID', id);
		localStorage.setItem('Titre', titre);

		navigate(`/private/comments/comment/${id}`);
	};

	const handleModify = () => {
		navigate(`/private/publications/edit/${id}`);
	};

	return (
		<li className="list-group-item list-group-item-primary mt-3 btn p-2">
			<Link
				to={`/private/publications/${id}`}
				activeclassname="active"
				style={{ textDecoration: 'none' }}
			>
				<h2>{titre}</h2>
				<p>POST # {id} </p>
				<p>done by user {utilisateur}</p>

				<p>Text: {text}</p>
				<p>Post type: {type}</p>
				<p>Comments:{comment}</p>
				<p>posted on: {date}</p>
			</Link>
			<button
				onClick={handleModify}
				className="btn btn-secondary btn-block "
				disabled={disabled}
			>
				Modify Post
			</button>

			<button onClick={handleComment} className="btn btn-primary">
				Click to comment
			</button>
		</li>
	);
};

export default ListItem;
