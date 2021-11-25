import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ titre, text, utilisateur, id, type, comment, date }) => {
	const navigate = useNavigate();

	const handleComment = () => {
		localStorage.setItem('PostID', id);
		localStorage.setItem('Titre', titre);

		navigate(`/comments/comment/${id}`);
	};

	const handleModify = () => {
		navigate(`/publications/edit/${id}`);
	};

	return (
		<li className="list-group-item list-group-item-primary mt-3 btn p-2">
			<Link
				to={`/publications/${id}`}
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
			<button onClick={handleModify} className="btn btn-secondary btn-block">
				Modify Post
			</button>

			<button onClick={handleComment} className="btn btn-primary">
				Click to comment
			</button>
		</li>
	);
};

export default ListItem;
