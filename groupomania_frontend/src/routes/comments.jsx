import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListComments from '../components/ListComments';

export default function Comments() {
	const url = 'http://localhost:8081/api/commentaire';
	const [comments, getComments] = useState([]);

	useEffect(() => {
		axios
			.get(`${url}`)
			.then((response) => {
				const allComments = response.data;
				getComments(allComments);
			})
			.catch((error) => {
				console.error(`Error:${error}`);
				alert('Back End NOT ready');
			});
	}, []);

	return (
		<div className="container">
			<h2>Comments</h2>
			<ListComments comments={comments} />
		</div>
	);
}
