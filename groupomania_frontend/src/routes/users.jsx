import React, { useEffect, useState } from 'react';
import User from '../components/User';

export default function Users() {
	const [users, setUser] = useState([]);

	useEffect(() => {
		getAllUsers();
	}, []);

	function getAllUsers() {
		fetch('http://localhost:8081/api/user')
			.then((result) => {
				result.json().then((resp) => {
					console.log(resp);
					setUser(resp);

					console.log(resp[0].email);
				});
			})
			.catch((error) => {
				console.error(`Error:${error}`);
			});
	}
	///Child Component
	const usersList = users.map(({ email, id, nom, prenom, password }) => (
		<li key={id} className="list-group-item list-group-item-primary mt-3">
			<User
				allUsers={users}
				addUser={setUser}
				nom={nom}
				prenom={prenom}
				id={id}
				email={email}
				password={password}
			/>
		</li>
	));

	return (
		<div className="container">
			<h2>Users count: {users.length} </h2>

			<ul className="list-group">{usersList}</ul>
		</div>
	);
}
