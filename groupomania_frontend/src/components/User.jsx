import React from 'react';
import { useNavigate } from 'react-router-dom';

// Destructuring props in the function arguments.
const User = ({
	allUsers,
	addUser,
	setEmail,
	email,
	id,
	nom,
	prenom,
	password,
}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/private/users/edit/${id}`);
	};

	return (
		<div>
			<p>
				{prenom} {nom} | {email}
			</p>
			<button onClick={handleClick} className="btn btn-primary">
				modify user
			</button>
		</div>
	);
};
export default User;
