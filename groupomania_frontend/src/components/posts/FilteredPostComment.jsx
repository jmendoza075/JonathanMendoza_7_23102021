import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function FilteredPostComment({ postId }) {
	const url = 'http://localhost:8081/api/commentaire';
	const [comments, getComments] = useState([]);

	// Get all comments for a single post
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
			<h4>Comments on this Post: </h4>

			{comments
				// eslint-disable-next-line
				.filter((comment) => comment.publication_id == postId)
				.map((filteredComment) => (
					<div key={filteredComment.id}>
						<Link
							to={`/private/comments/${filteredComment.id}`}
							activeclassname="active"
							style={{ textDecoration: 'none' }}
						>
							<h5>{filteredComment.comment}</h5>
							<small>comment id: {filteredComment.id} </small>
							<small> by user id: {filteredComment.utilisateur_id}</small>
							<small> about post id {filteredComment.publication_id}</small>
							<small> on {filteredComment.date_cre}</small>
							<p></p>
							<small> voir le commentaire</small>
							<hr />
						</Link>
					</div>
				))}
		</div>
	);
}
