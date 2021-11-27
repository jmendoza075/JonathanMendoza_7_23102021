import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function FilteredPostComment({ postId }) {
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
			<h4>Comments on this Post: </h4>

			{comments
				// eslint-disable-next-line
				.filter((comment) => comment.publication_id == postId)
				.map((filteredComment) => (
					<div key={filteredComment.id}>
						<p>{filteredComment.comment}</p>
						<small>comment id: {filteredComment.id} </small>
						<small> by user id: {filteredComment.utilisateur_id}</small>
						<small> about post id {filteredComment.publication_id}</small>
						<small> on {filteredComment.date_cre}</small>

						<p></p>

						<Link
							to={`/private/comments/${filteredComment.id}`}
							activeclassname="active"
							style={{ textDecoration: 'none' }}
						>
							Delete or Edit comment
						</Link>

						<hr />
					</div>
				))}
		</div>
	);
}
