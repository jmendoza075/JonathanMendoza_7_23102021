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
		<div className="container col-md-9 ">
			<h4>Commentaires sur cette publication: </h4>
			<div>
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
								<h6>{filteredComment.comment}</h6>
								<small>commentaire id: {filteredComment.id} </small>
								<small> par user id: {filteredComment.utilisateur_id}</small>
								<small> sur {filteredComment.publication_id}</small>
								<small> le {filteredComment.date_cre}</small>
								<p></p>
								<small> voir le commentaire</small>
								<hr />
							</Link>
						</div>
					))}
			</div>
		</div>
	);
}
