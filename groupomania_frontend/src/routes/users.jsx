import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowUsers from '../components/ShowUsers';

export default function Users() {
	const url = 'http://localhost:8081/api/user';
	const [users, getUsers] = useState([]);

	useEffect(() => {
		axios
			.get(`${url}`)
			.then((response) => {
				const allUsers = response.data;
				getUsers(allUsers);
				console.log(allUsers);
			})
			.catch((error) => {
				console.error(`Error:${error}`);
			});
	}, []);

	return (
		<div className="container">
			<h2>Users</h2>
			{users.map((user) => (
				<ShowUsers
					key={user.id}
					email={user.email}
					id={user.id}
					nom={user.nom}
					prenom={user.prenom}
					password={user.password}
				/>
			))}
		</div>
	);
}
