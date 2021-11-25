import { Link } from 'react-router-dom';

const ShowComments = (props) => (
	<ul className="list-group">
		<li className="list-group-item list-group-item-primary mt-3 btn">
			<Link
				to={`/comments/${props.id}`}
				activeclassname="active"
				style={{ textDecoration: 'none' }}
			>
				{props.id}
				<p>{props.comment}</p>
				<p>
					comment id {props.id} by user {props.user}
				</p>
				<p>on {props.date}</p>
				<span>about the post id {props.post_id}</span>
			</Link>
		</li>
	</ul>
);

export default ShowComments;
