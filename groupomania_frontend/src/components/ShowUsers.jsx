import { Link } from 'react-router-dom';

const ShowUsers = (props) => (
	<ul className="list-group">
		<li className="list-group-item list-group-item-primary mt-3">
			<Link to={`/users/${props.id}`} activeclassname="active">
				<span>{props.id}`</span>
				<h3>
					{props.prenom} {props.nom}
				</h3>
				<p>{props.email}</p>

				<p>{props.password}</p>
			</Link>
		</li>
	</ul>
);

export default ShowUsers;
